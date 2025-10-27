"use client";
import { useState } from "react";
import Input from "../Common/Input";
import Button from "../Common/Button";

export default function VehicleStatusForm({ isLoggedIn, onCheckChallan }) {
    const [vehicleNumber, setVehicleNumber] = useState("");

    const lastSearchedVehicles = [
        "DL 7S CM 4147",
        "WW WW WW WWW",
        "32 43 24 2342",
        "HR 26 AB 1234",
        "MH 01 XY 5678"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Vehicle Number:", vehicleNumber);
    };

    const handleVehicleInput = (value) => {
        let formatted = value.toUpperCase().replace(/[^A-Z0-9]/g, "");

        if (formatted.length > 10) {
            return;
        }

        if (formatted.length > 2)
            formatted = formatted.slice(0, 2) + " " + formatted.slice(2);
        if (formatted.length > 5)
            formatted = formatted.slice(0, 5) + " " + formatted.slice(5);
        if (formatted.length > 8)
            formatted = formatted.slice(0, 8) + " " + formatted.slice(8);
        setVehicleNumber(formatted);
    };

    const handleVehicleSuggestion = (suggestion) => {
        setVehicleNumber(suggestion);
    };

    return (
        <div className="w-full md:w-1/2 bg-black/20 backdrop-blur-lg border border-[rgba(255,255,255,0.2)] rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-textwhite mb-3 sm:mb-4">
                Check Your Vehicle Status
            </h2>
            <p className="text-xs sm:text-sm text-[rgba(255,255,255,0.7)] mb-5 sm:mb-6">
                Enter your vehicle registration number below to view your challan
                details.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-textwhite mb-2">
                        Vehicle Number
                    </label>
                    <div className="flex items-center gap-2">
                        <div className="bg-main text-backg font-semibold px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base">
                            IND
                        </div>
                        <Input
                            type="text"
                            placeholder="DL 12 CX 1234"
                            value={vehicleNumber}
                            onChange={(e) => handleVehicleInput(e.target.value)}
                            className="flex-1 border border-transparent rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-lg sm:text-xl font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-main transition-all bg-bg-primary text-text-primary placeholder:text-text-muted"
                        />
                    </div>

                   
                </div>

                <Button
                    type="submit"
                    onClick={() => onCheckChallan(isLoggedIn)}
                    disabled={vehicleNumber.length < 13}
                    className="w-full bg-main hover:bg-hoverlight text-backg font-semibold py-2.5 sm:py-3 rounded-lg shadow-lg transition-all duration-200 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-main"
                >
                    🔍 Check Challan
                </Button>
            </form>

            <div className="mt-6">
                <p className="text-xs sm:text-sm text-[rgba(255,255,255,0.7)] mb-3">
                    Last searched vehicles:
                </p>
                <div className="flex flex-wrap gap-2">
                    {lastSearchedVehicles.map((vehicle, index) => (
                        <Button
                            key={index}
                            onClick={() => handleVehicleSuggestion(vehicle)}
                            className="px-3 py-1.5 text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-[rgba(255,255,255,0.8)] hover:text-textwhite border border-[rgba(255,255,255,0.2)] rounded-lg transition-all duration-200 hover:scale-105"
                        >
                            {vehicle}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}
