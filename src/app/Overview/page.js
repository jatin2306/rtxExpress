"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Ticket, ChevronRight, Wallet } from "lucide-react";

 function ChallansContent() {
  const [selectedChallan, setSelectedChallan] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "All";

  // ✅ Sample challans
  const challans = [
    {
      id: 1,
      amount: 2000,
      offence: "53. Driver w/o helmet or Turban",
      issuedOn: "12 May 2025",
      mode: "Online",
      location: "DUNDHR",
      challanNo: "HR280646250512214418",
    },
    {
      id: 2,
      amount: 1000,
      offence: "Signal Jump at Red Light",
      issuedOn: "05 Apr 2025",
      mode: "Offline",
      location: "ROHTAK",
      challanNo: "HR270946250423174925",
    },
  ];

  const filteredChallans =
    activeTab === "Pending" ? challans : activeTab === "Paid" ? [] : challans;

  const totalAmount = filteredChallans.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  // ✅ Load Razorpay SDK
  useEffect(() => {
    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // ✅ Handle Pay All
  const handlePayAll = () => {
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded yet. Please try again in a moment.");
      return;
    }

    const options = {
      key: "rzp_test_1234567890abcdef", // 🔑 replace with your Razorpay key
      amount: totalAmount * 100, // in paisa
      currency: "INR",
      name: "Traffic Police Department",
      description: "Challan Payment",
      handler: function (response) {
        alert(`✅ Payment successful! ID: ${response.razorpay_payment_id}`);
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-main to-white px-4 sm:px-8 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-textPrimary text-left">
            Your {activeTab} Challans
          </h1>

          <div className="flex items-center gap-3 bg-gradient-to-r from-hoverColor to-hoverlight text-textwhite font-bold px-4 py-2 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
            <span className="text-sm sm:text-base">🚗</span>
            <span className="tracking-widest text-lg sm:text-xl">
              HR26 AB 1234
            </span>
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-8 gap-1">
          <button
            onClick={() => router.push("/")}
            className="hover:text-hoverColor font-medium"
          >
            Home
          </button>

          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span
            onClick={() => router.push("/Overview")}
            className="font-medium hover:text-hoverColor cursor-pointer"
          >
            Overview
          </span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-hoverColor font-semibold">{activeTab}</span>
        </div>

        {activeTab === "Pending" && filteredChallans.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-main to-backg border border-hoverlight/20 rounded-2xl shadow-sm p-5 sm:p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-textPrimary">
                Total {filteredChallans.length} Challans
              </h2>
              <p className="text-gray-600 mt-1">
                Combined Amount:{" "}
                <span className="font-bold text-textPrimary">
                  ₹{totalAmount.toLocaleString("en-IN")}
                </span>
              </p>
            </div>

            <button
              onClick={handlePayAll}
              className="flex items-center justify-center gap-2 bg-hoverColor hover:bg-hoverlight text-textwhite font-semibold px-6 py-3 rounded-lg shadow-md transition-all"
            >
              <Wallet className="w-5 h-5" />
              Pay All
            </button>
          </motion.div>
        )}

        <div className="space-y-4">
          {filteredChallans.length > 0 ? (
            filteredChallans.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-backg border border-hoverlight/20 rounded-xl shadow-sm p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div>
                  <h3 className="text-lg font-semibold text-textPrimary">
                    {item.offence}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Issued on {item.issuedOn}
                  </p>
                </div>

                <div className="flex sm:flex-col sm:items-end justify-between sm:justify-center w-full sm:w-auto">
                  <p className="text-lg font-bold text-hoverColor">
                    ₹{item.amount.toLocaleString("en-IN")}
                  </p>
                  <button
                    onClick={() => setSelectedChallan(item)}
                    className="mt-1 text-sm text-hoverColor hover:underline font-medium"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No challans found for {activeTab}.
            </p>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedChallan && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedChallan(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-backg w-[90%] sm:w-[480px] rounded-2xl p-6 sm:p-8 shadow-lg relative border border-hoverlight/20"
            >
              <button
                onClick={() => setSelectedChallan(null)}
                className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>

              <div className="space-y-4 mt-4">
                <div>
                  <p className="text-3xl font-bold text-textPrimary">
                    ₹{selectedChallan.amount.toLocaleString("en-IN")}
                  </p>
                  <p className="text-gray-700 mt-1">
                    <span className="font-semibold text-gray-800">
                      Offence -
                    </span>{" "}
                    {selectedChallan.offence}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm">
                    Issued on {selectedChallan.issuedOn}
                  </span>
                  <span className="bg-main text-textPrimary px-3 py-1 rounded-md text-sm">
                    {selectedChallan.mode}
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-3 space-y-2">
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedChallan.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Ticket className="w-4 h-4" />
                    <span>{selectedChallan.challanNo}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedChallan(null)}
                  className="w-full bg-hoverColor hover:bg-hoverlight text-textwhite font-semibold py-3 rounded-lg shadow-md transition-all"
                >
                  Ok, got it
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default function ChallansPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-indigo-600">Loading...</div>}>
      <ChallansContent />
    </Suspense>
  );
}