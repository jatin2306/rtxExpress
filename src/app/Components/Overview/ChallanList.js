"use client";
import ChallanCard from "./ChallanCard";

export default function ChallanList({ 
  filteredChallans, 
  selectedIds, 
  toggleSelect, 
  setSelectedChallan 
}) {
  if (filteredChallans.length === 0) {
    return (
      <p className="text-center text-textwhite/70">
        No challans found.
      </p>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {filteredChallans.map((item) => (
        <ChallanCard
          key={item.id}
          item={item}
          selectedIds={selectedIds}
          toggleSelect={toggleSelect}
          setSelectedChallan={setSelectedChallan}
        />
      ))}
    </div>
  );
}
