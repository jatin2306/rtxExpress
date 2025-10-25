"use client";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Ticket } from "lucide-react";
import Button from "../Common/Button";

export default function ChallanDetailsModal({ selectedChallan, setSelectedChallan }) {
  if (!selectedChallan) return null;

  return (
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
            className="bg-white w-full rounded-t-3xl p-6 shadow-lg relative scrollbar-hide"
          >
            <Button
              onClick={() => setSelectedChallan(null)}
              className="absolute top-4 right-4 text-text-muted hover:text-text-secondary text-xl font-bold"
            >
              ×
            </Button>

            <div className="space-y-4">
              <div>
                <p className="text-3xl font-bold text-text-primary">
                  ₹{selectedChallan.amount.toLocaleString("en-IN")}
                </p>
                <p className="text-text-secondary mt-2">
                  <span className="font-semibold text-text-primary">Offence:</span> {selectedChallan.offence}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-text-secondary text-sm">Issued on {selectedChallan.issuedOn}</span>
                <span className="bg-main text-backg px-2 py-1 rounded text-xs font-medium">
                  {selectedChallan.mode}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-text-secondary">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{selectedChallan.location}</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <Ticket className="w-4 h-4" />
                  <span className="text-sm">{selectedChallan.challanNo}</span>
                  <Button
                    onClick={() => navigator.clipboard.writeText(selectedChallan.challanNo)}
                    className="text-text-muted hover:text-text-secondary ml-1"
                  >
                    📋
                  </Button>
                </div>
              </div>

              <Button
                onClick={() => setSelectedChallan(null)}
                className="w-full bg-main hover:bg-hoverlight text-backg font-bold py-4 rounded-xl shadow-lg transition-all transform hover:scale-105"
              >
                Ok, got it
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
