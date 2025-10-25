"use client";

import Button from "../Common/Button";

export default function SelectAllButton({ 
  selectedIds, 
  filteredChallans, 
  selectAll, 
  clearSelection 
}) {
  return (
    <div className="flex justify-end mb-4">
      <Button
        onClick={selectedIds.size === filteredChallans.length ? clearSelection : selectAll}
        className="text-sm text-main hover:underline font-medium transition-colors duration-200 px-3 py-1 rounded-lg hover:bg-main/10"
      >
        {selectedIds.size === filteredChallans.length ? "Deselect All" : "Select All"}
      </Button>
    </div>
  );
}
