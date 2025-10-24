import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Enter Vehicle Number",
      description: "Simply enter your vehicle registration number in the format shown above. Our system will instantly search for your challans.",
    },
    {
      number: "2", 
      title: "Review Challan Details",
      description: "View all your pending challans with complete details including offence, amount, location, and issue date.",
    },
    {
      number: "3",
      title: "Secure Payment", 
      description: "Pay securely using our integrated payment gateway. Get instant confirmation and receipt for your records.",
    },
  ];

  return (
    <div className="bg-backg py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-textwhite mb-4">
            How It Works
          </h2>
          <p className="text-[rgba(255,255,255,0.8)] text-lg max-w-2xl mx-auto">
            Get your challan resolved in just 3 simple steps. Our streamlined process makes it easy and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="bg-main text-[#004d4d] w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-textwhite mb-3">
                {step.title}
              </h3>
              <p className="text-[rgba(255,255,255,0.7)] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
