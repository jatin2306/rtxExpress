"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet } from "lucide-react";
import Button from "../Common/Button";

export default function SelectedChallansInfo({ 
  selectedIds, 
  selectedTotal, 
  handlePaySelected, 
  setShowBreakup 
}) {
  return (
    <AnimatePresence>
      {selectedIds.size > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col items-end gap-2"
        >
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-2xl font-bold text-main">
                ₹{selectedTotal.toLocaleString("en-IN")}
              </p>
            </div>
            <Button
              onClick={handlePaySelected}
              className="bg-main hover:bg-hoverlight text-backg font-semibold px-4 py-2 rounded-lg shadow-md transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Wallet className="w-4 h-4" />
              {selectedIds.size === 1 ? "Pay Challan" : "Pay Challans"}
            </Button>
          </div>
          <Button
            onClick={() => setShowBreakup(true)}
            className="text-sm text-main hover:underline font-medium flex items-center gap-1 self-end"
          >
            View Breakup
            <span className="w-4 h-4 bg-main text-backg rounded-full flex items-center justify-center text-xs font-bold">i</span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
