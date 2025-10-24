import React from "react";

const StatisticsSection = () => {
  const statistics = [
    {
      value: "50K+",
      label: "Happy Users",
    },
    {
      value: "₹2Cr+",
      label: "Amount Processed",
    },
    {
      value: "99.9%",
      label: "Success Rate",
    },
    {
      value: "24/7",
      label: "Support Available",
    },
  ];

  return (
    <div className="bg-backg py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-textwhite mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-[rgba(255,255,255,0.8)] text-lg max-w-2xl mx-auto">
            Join the growing community of users who have simplified their challan payments with RTX Express.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-main mb-2">
                {stat.value}
              </div>
              <div className="text-[rgba(255,255,255,0.7)] text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
