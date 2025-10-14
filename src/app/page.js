"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  const cars = [
    {
      name: "Maruti Swift",
      price: "₹5.9 - ₹8.77 Lakh",
      image:
        "https://imgd.aeplcdn.com/1200x900/n/cw/ec/156457/swift-exterior-right-front-three-quarter-3.jpeg",
      bg: "bg-pink-50",
    },
    {
      name: "Maruti Baleno",
      price: "₹6.56 - ₹9.83 Lakh",
      image:
        "https://imgd.aeplcdn.com/1200x900/n/cw/ec/115795/baleno-exterior-right-front-three-quarter-2.jpeg",
      bg: "bg-green-50",
    },
    {
      name: "Tata Tiago",
      price: "₹5 - ₹8.45 Lakh",
      image:
        "https://imgd.aeplcdn.com/1200x900/n/cw/ec/115785/tiago-exterior-right-front-three-quarter.jpeg",
      bg: "bg-blue-50",
    },
    {
      name: "Maruti Wagon R",
      price: "₹5.54 - ₹7.32 Lakh",
      image:
        "https://imgd.aeplcdn.com/1200x900/n/cw/ec/156465/wagonr-exterior-right-front-three-quarter.jpeg",
      bg: "bg-yellow-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f2e6ff] via-[#ede9fe] to-[#faf5ff] text-gray-900">
      <section className="flex flex-col items-center justify-center text-center py-24 relative overflow-hidden px-4 sm:px-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(216,180,254,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(219,234,254,0.3),transparent_50%)]" />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 drop-shadow-md leading-tight"
        >
          Welcome to rtOExpress
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-600 max-w-md sm:max-w-xl"
        >
          Your one-stop platform for vehicle information, insurance, and challan
          management — fast, reliable, and effortless.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 sm:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition text-sm sm:text-base"
        >
          Get Started
        </motion.button>
      </section>

      <section className="px-4 sm:px-10 pb-20 sm:pb-24">
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <div className="w-2 h-6 sm:h-8 bg-purple-500 rounded-full" />
          <h2 className="text-xl sm:text-2xl font-semibold">Trending Cars</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04, y: -4 }}
              className={`p-4 rounded-2xl shadow-md ${car.bg} hover:shadow-xl transition text-center sm:text-left`}
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
              <h3 className="mt-3 font-semibold text-lg sm:text-xl text-gray-800">
                {car.name}
              </h3>
              <p className="text-gray-600 font-medium text-sm sm:text-base">
                {car.price}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8 sm:mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full border border-purple-400 text-purple-600 hover:bg-purple-100 transition font-medium text-sm sm:text-base"
          >
            View More →
          </motion.button>
        </div>
      </section>
    </div>
  );
}
