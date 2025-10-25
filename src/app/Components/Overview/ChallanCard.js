"use client";
import { motion } from "framer-motion";
import { MapPin, Ticket } from "lucide-react";

export default function ChallanCard({ item, selectedIds, toggleSelect, setSelectedChallan }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-black/20 backdrop-blur-lg border border-[rgba(255,255,255,0.2)] rounded-xl shadow-sm p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-semibold text-textwhite flex-1 leading-tight truncate">
            {item.offence}
          </h3>
          <div className="flex items-center gap-3 flex-shrink-0">
            <p className="text-lg font-bold text-main">
              ₹{item.amount.toLocaleString("en-IN")}
            </p>
            <label className="flex items-center cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={selectedIds.has(item.id)}
                  onChange={() => toggleSelect(item.id)}
                />
                <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center group-hover:scale-110 ${
                  selectedIds.has(item.id) 
                    ? 'bg-main border-main shadow-lg shadow-main/30' 
                    : 'border-main/40 bg-transparent hover:border-main/70 hover:bg-main/10'
                }`}>
                  {selectedIds.has(item.id) && (
                    <svg className="w-4 h-4 text-backg" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-[rgba(255,255,255,0.7)]">
            Issued on {item.issuedOn}
          </p>
          <button
            onClick={() => setSelectedChallan(item)}
            className="text-sm text-main hover:underline font-medium"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
