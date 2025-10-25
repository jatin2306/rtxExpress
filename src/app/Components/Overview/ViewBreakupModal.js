"use client";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Common/Button";

export default function ViewBreakupModal({
  showBreakup,
  setShowBreakup,
  selectedChallans,
  totalAmount
}) {
  return (
    <AnimatePresence>
      {showBreakup && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowBreakup(false)}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl max-h-[85vh] flex flex-col"
          >
            {/* Handle bar */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
            </div>

            <Button
              onClick={() => setShowBreakup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
            >
              ×
            </Button>


            <div className="px-6 pt-4 pb-2 border-b border-gray-200 bg-white flex-shrink-0">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 text-center">Challan Details</h2>
              </div>
            </div>


            <div className="px-8 py-3 border-b border-gray-200 bg-white flex-shrink-0">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-3 gap-6 text-sm font-medium text-gray-600">
                  <div className="text-center">Challan Details</div>
                  <div className="text-center">Amount</div>
                  <div className="text-center">Settlement Fees</div>
                </div>
              </div>
            </div>


            <div className="flex-1 overflow-y-auto px-8 py-2">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-1">
                  {selectedChallans.map((challan, index) => (
                    <div key={challan.id} className="grid grid-cols-3 gap-6 py-2 border-b border-gray-100 last:border-b-0">
                    <div className="text-left min-w-0 flex-1">
                      <p className="font-semibold text-gray-900 text-sm leading-tight break-words sm:break-normal truncate sm:truncate-none">
                        {challan.offence}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 font-mono break-all">
                        {challan.challanNo}
                      </p>
                    </div>
                    <div className="text-right flex items-center justify-end">
                      <p className="font-semibold text-gray-900 text-lg">
                        ₹{challan.amount.toLocaleString("en-IN")}
                      </p>
                    </div>
                    <div className="text-right flex items-center justify-end">
                      <div className="flex flex-col items-end">
                        <span className="text-sm text-gray-400 line-through">₹149</span>
                        <span className="text-sm font-semibold text-green-600">₹0</span>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>


            <div className="px-8 py-4 border-t border-gray-200 bg-white flex-shrink-0">
              <div className="max-w-4xl mx-auto">
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Total to Pay</h3>
                    <p className="text-sm text-green-600">No additional charges applied</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">
                      ₹{totalAmount.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              </div>


              <Button
                onClick={() => {
                  if (!window.Razorpay) {
                    alert("Razorpay SDK not loaded yet. Please try again in a moment.");
                    return;
                  }

                  const options = {
                    key: "rzp_test_1234567890abcdef",
                    amount: totalAmount * 100,
                    currency: "INR",
                    name: "Traffic Police Department",
                    description: `Challan Payment - ${selectedChallans.length} challans`,
                    handler: function (response) {
                      alert(`✅ Payment successful! ID: ${response.razorpay_payment_id}`);
                      setShowBreakup(false);
                    },
                    prefill: {
                      name: "Jatin Gupta",
                      email: "user@example.com",
                      contact: "9999999999",
                    },
                    theme: { color: "var(--color-hoverColor)" },
                  };

                  const rzp = new window.Razorpay(options);
                  rzp.open();
                }}
                className="w-full bg-main hover:bg-hoverlight text-backg font-bold py-4 rounded-xl shadow-lg transition-all transform hover:scale-105"
              >
                Pay now
              </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
