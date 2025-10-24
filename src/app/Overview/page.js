"use client";
import { useState, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Ticket, ChevronRight, Wallet } from "lucide-react";
import BackButton from "../Components/Common/BackButton";

function ChallansContent() {
  const [selectedChallan, setSelectedChallan] = useState(null);
  const [selectedIds, setSelectedIds] = useState(new Set());
  const masterCheckboxRef = useRef(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "All";

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
    {
      id: 3,
      amount: 1500,
      offence: "Over Speeding (50+ km/h)",
      issuedOn: "18 Mar 2025",
      mode: "Online",
      location: "GURGAON",
      challanNo: "HR290346250318145632",
    },
    {
      id: 4,
      amount: 500,
      offence: "No Parking Violation",
      issuedOn: "22 Feb 2025",
      mode: "Offline",
      location: "FARIDABAD",
      challanNo: "HR300246250222093847",
    },
    {
      id: 5,
      amount: 3000,
      offence: "Driving without License",
      issuedOn: "15 Jan 2025",
      mode: "Online",
      location: "SONIPAT",
      challanNo: "HR310146250115164729",
    },
    {
      id: 6,
      amount: 800,
      offence: "Wrong Lane Driving",
      issuedOn: "08 Dec 2024",
      mode: "Offline",
      location: "PANIPAT",
      challanNo: "HR320046241208112456",
    },
    {
      id: 7,
      amount: 1200,
      offence: "Mobile Phone while Driving",
      issuedOn: "25 Nov 2024",
      mode: "Online",
      location: "KARNAL",
      challanNo: "HR330046241125083921",
    },
    {
      id: 8,
      amount: 2500,
      offence: "Drunk Driving",
      issuedOn: "12 Oct 2024",
      mode: "Offline",
      location: "AMBALA",
      challanNo: "HR340046241012195647",
    },
    {
      id: 9,
      amount: 600,
      offence: "Seat Belt Violation",
      issuedOn: "05 Sep 2024",
      mode: "Online",
      location: "YAMUNANAGAR",
      challanNo: "HR350046240905142738",
    },
    {
      id: 10,
      amount: 1800,
      offence: "Triple Riding on Two Wheeler",
      issuedOn: "28 Aug 2024",
      mode: "Offline",
      location: "HISAR",
      challanNo: "HR360046240828091456",
    },
  ];

  const filteredChallans =
    activeTab === "Pending" ? challans : activeTab === "Paid" ? [] : challans;

  const totalAmount = filteredChallans.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const selectedChallans = filteredChallans.filter((c) => selectedIds.has(c.id));
  const selectedTotal = selectedChallans.reduce((sum, c) => sum + c.amount, 0);

  const toggleSelect = (id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectAll = () => setSelectedIds(new Set(filteredChallans.map((c) => c.id)));
  const clearSelection = () => setSelectedIds(new Set());

  // Keep master checkbox indeterminate when partially selected
  useEffect(() => {
    if (!masterCheckboxRef.current) return;
    const total = filteredChallans.length;
    const selected = selectedIds.size;
    masterCheckboxRef.current.indeterminate = selected > 0 && selected < total;
  }, [selectedIds, filteredChallans.length]);

  useEffect(() => {
    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.style.display = 'none';
    }
    
    return () => {
      if (footer) {
        footer.style.display = 'block';
      }
    };
  }, []);

  const handlePayAll = () => {
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded yet. Please try again in a moment.");
      return;
    }

    const options = {
      key: "rzp_test_1234567890abcdef",
      amount: totalAmount * 100,
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

  const handlePaySelected = () => {
    if (selectedIds.size === 0) {
      alert("Please select at least one challan to pay.");
      return;
    }
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded yet. Please try again in a moment.");
      return;
    }

    const options = {
      key: "rzp_test_1234567890abcdef",
      amount: selectedTotal * 100,
      currency: "INR",
      name: "Traffic Police Department",
      description: `Challan Payment (${selectedIds.size} selected)`,
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
    <div className="fixed inset-0 bg-backg flex flex-col">
      <div className="flex-shrink-0 px-4 sm:px-8 py-6 bg-backg z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <BackButton />
            <h1 className="text-2xl sm:text-3xl font-bold text-textwhite text-center sm:text-left sm:pl-4 flex-1">
              Your {activeTab} Challans
            </h1>

            <div className="hidden sm:flex items-center gap-3 bg-main text-[#004d4d] font-bold px-4 py-2 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
              <span className="text-sm sm:text-base">🚗</span>
              <span className="tracking-widest text-lg sm:text-xl">
                HR26 AB 1234
              </span>
            </div>
          </div>
          
          <div className="sm:hidden flex justify-center mb-6">
            <div className="flex items-center gap-3 bg-main text-[#004d4d] font-bold px-4 py-2 rounded-2xl shadow-lg">
              <span className="text-sm">🚗</span>
              <span className="tracking-widest text-lg">HR26 AB 1234</span>
            </div>
          </div>

          {activeTab === "Pending" && filteredChallans.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-black/20 backdrop-blur-lg border border-[rgba(255,255,255,0.2)] rounded-2xl shadow-sm p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-textwhite">
                  Total {filteredChallans.length} Challans
                </h2>

                <div className="mt-2 flex items-center gap-4 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      ref={masterCheckboxRef}
                      type="checkbox"
                      className="accent-main w-4 h-4"
                      checked={filteredChallans.length > 0 && selectedIds.size === filteredChallans.length}
                      onChange={(e) => {
                        if (e.target.checked) selectAll(); else clearSelection();
                      }}
                    />
                    <span className="text-[rgba(255,255,255,0.85)]">Select all</span>
                  </label>
                  <button onClick={clearSelection} className="underline text-[rgba(255,255,255,0.85)] hover:text-main">Clear</button>
                </div>
              </div>

              <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handlePaySelected}
                  disabled={selectedIds.size === 0}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-lg shadow-md transition-all font-semibold ${selectedIds.size === 0 ? "bg-white/10 text-[rgba(255,255,255,0.6)] cursor-not-allowed" : "bg-main hover:bg-[#9fffe0] text-[#004d4d]"}`}
                >
                  <Wallet className="w-5 h-5" />
                  {selectedIds.size > 0
                    ? `Pay Selected (${selectedIds.size}) – ₹${selectedTotal.toLocaleString("en-IN")}`
                    : "Pay Selected"}
                </button>

                <button
                  onClick={handlePayAll}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-main hover:bg-[#9fffe0] text-[#004d4d] font-semibold px-6 py-3 rounded-lg shadow-md transition-all"
                >
                  <Wallet className="w-5 h-5" />
                  Pay All
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 sm:px-8 pb-6 scrollbar-hide">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4">
            {filteredChallans.length > 0 ? (
              filteredChallans.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-black/20 backdrop-blur-lg border border-[rgba(255,255,255,0.2)] rounded-xl shadow-sm p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-textwhite">
                      {item.offence}
                    </h3>
                    <p className="text-sm text-[rgba(255,255,255,0.7)] mt-1">
                      Issued on {item.issuedOn}
                    </p>
                  </div>

                  <div className="flex sm:flex-col sm:items-end justify-between sm:justify-center w-full sm:w-auto">
                    <div className="flex items-center gap-3">
                      <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          className="accent-main w-4 h-4"
                          checked={selectedIds.has(item.id)}
                          onChange={() => toggleSelect(item.id)}
                        />
                        <span className="text-[rgba(255,255,255,0.85)]">Select</span>
                      </label>
                      <p className="text-lg font-bold text-main">
                        ₹{item.amount.toLocaleString("en-IN")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelectedChallan(item)}
                        className="mt-1 text-sm text-main hover:underline font-medium"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-[rgba(255,255,255,0.7)]">
                No challans found for {activeTab}.
              </p>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedChallan && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedChallan(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
              className="bg-white w-full rounded-t-3xl p-6 shadow-lg relative"
            >
              <button
                onClick={() => setSelectedChallan(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
              >
                ×
              </button>

              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-bold text-gray-900">
                    ₹{selectedChallan.amount.toLocaleString("en-IN")}
                  </p>
                  <p className="text-gray-700 mt-2">
                    <span className="font-semibold text-gray-900">Offence:</span> {selectedChallan.offence}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-gray-600 text-sm">Issued on {selectedChallan.issuedOn}</span>
                  <span className="bg-main text-[#004d4d] px-2 py-1 rounded text-xs font-medium">
                    {selectedChallan.mode}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{selectedChallan.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Ticket className="w-4 h-4" />
                    <span className="text-sm">{selectedChallan.challanNo}</span>
                    <button 
                      onClick={() => navigator.clipboard.writeText(selectedChallan.challanNo)}
                      className="text-gray-400 hover:text-gray-600 ml-1"
                    >
                      📋
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedChallan(null)}
                  className="w-full bg-main hover:bg-[#9fffe0] text-[#004d4d] font-semibold py-3 rounded-lg transition-all"
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
    <Suspense
      fallback={
        <div className="p-8 text-center text-indigo-600">Loading...</div>
      }
    >
      <ChallansContent />
    </Suspense>
  );
}
