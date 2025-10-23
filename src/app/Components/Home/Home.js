"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Shield, Clock, Wallet, FileCheck2 } from "lucide-react";
import { logoName } from "../../Utilities/Utility";

export default function HomePage() {
  const cars = [
    {
      name: "Maruti Swift",
      price: "₹5.9 - ₹8.77 Lakh",
      image:
        "https://imgd.aeplcdn.com/1200x900/n/cw/ec/156457/swift-exterior-right-front-three-quarter-3.jpeg",
    },
    {
      name: "Maruti Baleno",
      price: "₹6.56 - ₹9.83 Lakh",
      image:
        "https://imgd.aeplcdn.com/1200x900/n/cw/ec/115795/baleno-exterior-right-front-three-quarter-2.jpeg",
    },
    {
      name: "Tata Tiago",
      price: "₹5 - ₹8.45 Lakh",
      image:
        "https://imgd.aeplcdn.com/1200x900/n/cw/ec/115785/tiago-exterior-right-front-three-quarter.jpeg",
    },
    {
      name: "Maruti Wagon R",
      price: "₹5.54 - ₹7.32 Lakh",
      image:
        "https://imgd.aeplcdn.com/1200x900/n/cw/ec/156465/wagonr-exterior-right-front-three-quarter.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-backg">
      <section className="flex flex-col items-center justify-center text-center py-24 relative overflow-hidden px-4 sm:px-0">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold text-textwhite leading-tight"
        >
          Welcome to {logoName}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 sm:mt-5 text-base sm:text-lg text-[rgba(255,255,255,0.8)] max-w-md sm:max-w-xl"
        >
          Your one-stop platform for vehicle information, insurance, and challan
          management — fast, reliable, and effortless.
        </motion.p>

        <Link href="/EChallan">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 sm:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 bg-main text-[#004d4d] font-semibold rounded-full shadow-md hover:bg-[#9fffe0] transition text-sm sm:text-base"
          >
            Get Started
          </motion.button>
        </Link>
      </section>

      <section className="px-4 sm:px-10 pb-16 sm:pb-20">
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <div className="w-2 h-6 sm:h-8 bg-main rounded-full" />
          <h2 className="text-xl sm:text-2xl font-semibold text-textwhite">
            Trending Cars
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04, y: -4 }}
              className={`p-4 rounded-2xl shadow-md bg-black/20 backdrop-blur-lg border border-[rgba(255,255,255,0.2)] hover:shadow-xl transition text-center sm:text-left`}
            >
              <div className="flex justify-center">
                <Image
                  src={car.image}
                  alt={car.name}
                  width={280}
                  height={180}
                  className="rounded-lg object-cover w-full sm:w-[260px] h-auto"
                />
              </div>
              <h3 className="mt-3 font-semibold text-lg sm:text-xl text-textwhite">
                {car.name}
              </h3>
              <p className="text-[rgba(255,255,255,0.7)] font-medium text-sm sm:text-base">
                {car.price}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8 sm:mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full border border-main text-main hover:bg-main hover:text-[#004d4d] transition font-medium text-sm sm:text-base"
          >
            View More →
          </motion.button>
        </div>
      </section>

      <section className="px-4 sm:px-10 pb-16 sm:pb-20">
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <div className="w-2 h-6 sm:h-8 bg-main rounded-full" />
          <h2 className="text-xl sm:text-2xl font-semibold text-textwhite">
            Why choose {logoName}?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              icon: <Shield className="w-6 h-6 text-main" />,
              title: "Secure Payments",
              desc: "Bank-grade encryption for every transaction.",
            },
            {
              icon: <Clock className="w-6 h-6 text-main" />,
              title: "Fast Processing",
              desc: "Find and clear challans in minutes.",
            },
            {
              icon: <FileCheck2 className="w-6 h-6 text-main" />,
              title: "Official Records",
              desc: "Accurate data from transport servers.",
            },
            {
              icon: <Wallet className="w-6 h-6 text-main" />,
              title: "Multiple Methods",
              desc: "UPI, cards, and netbanking supported.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-black/20 backdrop-blur-lg border border-[rgba(255,255,255,0.2)] rounded-2xl p-5 shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-main/20">{f.icon}</div>
                <h3 className="font-semibold text-textwhite">{f.title}</h3>
              </div>
              <p className="mt-2 text-sm text-[rgba(255,255,255,0.7)]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 sm:px-10 pb-16 sm:pb-20">
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <div className="w-2 h-6 sm:h-8 bg-main rounded-full" />
          <h2 className="text-xl sm:text-2xl font-semibold text-textwhite">
            How it works
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              step: "1",
              title: "Enter vehicle number",
              desc: "We'll fetch your challans securely.",
            },
            {
              step: "2",
              title: "Review details",
              desc: "Verify challans and amounts.",
            },
            {
              step: "3",
              title: "Pay securely",
              desc: "Complete payment in seconds.",
            },
          ].map((s, i) => (
            <div key={i} className="bg-black/20 backdrop-blur-lg border border-[rgba(255,255,255,0.2)] rounded-2xl p-5 shadow-md">
              <div className="w-9 h-9 rounded-full bg-main text-[#004d4d] flex items-center justify-center font-bold">
                {s.step}
              </div>
              <h3 className="mt-3 font-semibold text-textwhite">{s.title}</h3>
              <p className="text-sm text-[rgba(255,255,255,0.7)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
