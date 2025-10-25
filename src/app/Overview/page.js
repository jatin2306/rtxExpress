"use client";
import { useState, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet } from "lucide-react";
import BackButton from "../Components/Common/BackButton";
import ChallanList from "../Components/Overview/ChallanList";
import ChallanDetailsModal from "../Components/Overview/ChallanDetailsModal";
import ViewBreakupModal from "../Components/Overview/ViewBreakupModal";
import SelectAllButton from "../Components/Overview/SelectAllButton";
import SelectedChallansInfo from "../Components/Overview/SelectedChallansInfo";

function ChallansContent() {
  const [selectedChallan, setSelectedChallan] = useState(null);
  const [showBreakup, setShowBreakup] = useState(false);
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

            <div className="hidden sm:flex items-center gap-3 bg-main text-backg font-bold px-4 py-2 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
              <span className="text-sm sm:text-base">🚗</span>
              <span className="tracking-widest text-lg sm:text-xl">
                HR26 AB 1234
              </span>
            </div>
          </div>

          <div className="sm:hidden flex justify-center mb-6">
            <div className="flex items-center gap-3 bg-main text-backg font-bold px-4 py-2 rounded-2xl shadow-lg">
              <span className="text-sm">🚗</span>
              <span className="tracking-widest text-lg">HR26 AB 1234</span>
            </div>
          </div>

           {activeTab === "Pending" && filteredChallans.length > 0 && (
             <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.3 }}
               className="bg-black/20 backdrop-blur-lg border border-[rgba(255,255,255,0.2)] rounded-2xl shadow-sm p-3 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4"
             >
               <div>
                 <h2 className="text-sm sm:text-xl font-semibold text-textwhite">
                   Total {filteredChallans.length} Challans
                 </h2>
               </div>

               <AnimatePresence>
                 {selectedIds.size > 0 && (
                   <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.9 }}
                     transition={{ duration: 0.2 }}
                     className="flex flex-col items-end gap-1 sm:gap-2"
                   >
                     <div className="flex items-center justify-end gap-4">
                       <div className="text-right">
                         <p className="text-lg sm:text-2xl font-bold text-main">
                           ₹{selectedTotal.toLocaleString("en-IN")}
                         </p>
                       </div>
                       <button
                         onClick={handlePaySelected}
                         className="bg-main hover:bg-hoverlight text-backg font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-md transition-all transform hover:scale-105 flex items-center gap-2 text-sm sm:text-base"
                       >
                         <Wallet className="w-4 h-4" />
                         {selectedIds.size === 1 ? "Pay Challan" : "Pay Challans"}
                       </button>
                     </div>
                     <div className="flex justify-end">
                       <button
                         onClick={() => setShowBreakup(true)}
                         className="text-sm text-main hover:underline font-medium flex items-center gap-1"
                       >
                         View Breakup
                         <span className="w-4 h-4 bg-main text-backg rounded-full flex items-center justify-center text-xs font-bold">i</span>
                       </button>
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
             </motion.div>
           )}
        </div>
      </div>

      {/* Fixed Select All Button */}
      <div className="px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <SelectAllButton
            selectedIds={selectedIds}
            filteredChallans={filteredChallans}
            selectAll={selectAll}
            clearSelection={clearSelection}
          />
        </div>
      </div>

      {/* Scrollable Challan List */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 pb-6 scrollbar-hide">
        <div className="max-w-5xl mx-auto">
          <ChallanList
            filteredChallans={filteredChallans}
            selectedIds={selectedIds}
            toggleSelect={toggleSelect}
            setSelectedChallan={setSelectedChallan}
          />
        </div>
      </div>

      <ChallanDetailsModal
        selectedChallan={selectedChallan}
        setSelectedChallan={setSelectedChallan}
      />


      <ViewBreakupModal
        showBreakup={showBreakup}
        setShowBreakup={setShowBreakup}
        selectedChallans={filteredChallans.filter(challan => selectedIds.has(challan.id))}
        totalAmount={selectedTotal}
      />
    </div>
  );
}
export default function ChallansPage() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-main">Loading...</div>
      }
    >
      <ChallansContent />
    </Suspense>
  );
}
