import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🛡️",
      title: "100% Secure",
      description: "Bank-grade encryption and secure payment processing",
    },
    {
      icon: "⚡",
      title: "Lightning Fast", 
      description: "Instant challan lookup and payment processing",
    },
    {
      icon: "📱",
      title: "Mobile First",
      description: "Optimized for mobile devices with responsive design",
    },
    {
      icon: "🎯",
      title: "User Friendly",
      description: "Intuitive interface designed for all age groups",
    },
  ];

  return (
    <div className="bg-black/20 backdrop-blur-lg py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-textwhite mb-4">
            Why Choose RTX Express?
          </h2>
          <p className="text-[rgba(255,255,255,0.8)] text-lg max-w-2xl mx-auto">
            Experience the most reliable and user-friendly challan payment platform designed for modern India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-[rgba(255,255,255,0.2)]"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-textwhite mb-2">
                {feature.title}
              </h3>
              <p className="text-[rgba(255,255,255,0.7)] text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
