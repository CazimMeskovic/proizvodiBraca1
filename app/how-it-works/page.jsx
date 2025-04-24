/* // app/how-it-works/page.js
export default function HowItWorksPage() {
    return (
        <section className="py-16 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold">How It Works</h2>
            <p className="mt-4">Our streamlined process ensures success every step of the way.</p>
        </section>
    );
}
 */

import { FaRegClipboard, FaCogs, FaEnvelopeOpenText, FaHandsHelping } from "react-icons/fa";

const steps = [
  {
    icon: <FaRegClipboard className="text-4xl text-indigo-600" />,
    title: "Select Package & Intake",
    description:
      "Choose a package and tell us about your city. Fill out the form with your city info and goals."
  },
  {
    icon: <FaCogs className="text-4xl text-indigo-600" />,
    title: "Strategy Development",
    description:
      "We analyze your data and build a personalized digital strategy kit tailored to your goals."
  },
  {
    icon: <FaEnvelopeOpenText className="text-4xl text-indigo-600" />,
    title: "Delivery",
    description:
      "Receive your strategy kit via email in just a few days – delivered as a professional PDF document."
  },
  {
    icon: <FaHandsHelping className="text-4xl text-indigo-600" />,
    title: "Ongoing Support",
    description:
      "Have questions? We're here to support your implementation and help guide your growth."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 relative overflow-hidden">
      {/* Optional: Background graphic */}
      <div className="absolute inset-0 opacity-5 bg-[url('/images/worldmap.png')] bg-cover bg-center pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">How It Works</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Working with EarthMeta Advisor is simple and streamlined. Here’s how our advisory process unfolds:
        </p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{step.icon}</div>
              <div className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Step {index + 1}
              </div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
