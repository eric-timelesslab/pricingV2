import React from "react";
import { Check, Zap } from "lucide-react";

const tiers = [
  {
    name: "Free",
    originalName: "Free",
    price: "$0",
    description: "Basic features to get you started.",
    buttonText: "Start for Free",
    buttonVariant: "outline",
    popular: false,
  },
  {
    name: "Starter",
    originalName: "Practice",
    price: "$5.99",
    period: "/mo",
    description: "Perfect for casual practice and learning.",
    buttonText: "Get Starter",
    buttonVariant: "outline",
    popular: false,
  },
  {
    name: "Pro",
    originalName: "Practice unlimited",
    price: "$14.99",
    period: "/mo",
    description: "Unlimited practice for dedicated grinders.",
    buttonText: "Get Pro",
    buttonVariant: "primary",
    popular: true,
  },
  {
    name: "Elite",
    originalName: "AI Coach",
    price: "$59.99",
    period: "/mo",
    description: "Full AI coaching and unlimited reporting.",
    buttonText: "Get Elite",
    buttonVariant: "premium",
    popular: false,
  },
];

const features = [
  {
    category: "Practice",
    items: [
      {
        name: "Energy",
        values: ["10/day cap", "20/day cap", "Unlimited", "Unlimited"],
      },
      {
        name: "Opponent type",
        values: ["GTO only", true, true, true],
      },
      {
        name: "Range chart",
        values: ["-", true, true, true],
      },
      {
        name: "Streak protect",
        values: ["-", "3 / month", "3 / month", "3 / month"],
      },
    ],
  },
  {
    category: "AI Features",
    items: [
      {
        name: "Smart report",
        values: ["2 lifetime", "2 lifetime", "3 / day", "Unlimited"],
      },
      {
        name: "AI coach thread",
        values: ["1 / day", "1 / day", "Unlimited", "Unlimited"],
      },
      {
        name: "AI Leak detection",
        values: ["2 lifetime", "2 lifetime", "3 / month", "Unlimited"],
      },
    ],
  },
  {
    category: "Toolbox",
    items: [
      {
        name: "Equity calculator",
        values: [true, true, true, true],
      },
      {
        name: "Range calculator",
        values: [true, true, true, true],
      },
      {
        name: "Nash charts",
        values: ["Basic", "Basic", true, true],
      },
    ],
  },
];

function renderValue(value: string | boolean) {
  if (value === true)
    return <Check className="w-5 h-5 text-emerald-500 mx-auto" />;
  if (value === false) return <span className="text-gray-600">-</span>;
  return (
    <span className="text-gray-300 text-sm font-medium">{String(value)}</span>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0e1015] text-gray-100 py-20 px-4 sm:px-6 lg:px-8 font-sans selection:bg-emerald-500/30">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Level up your game with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            AI Coaching
          </span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Choose the plan that fits your grind. From basic practice to elite
          AI-driven leak detection.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative flex flex-col p-8 rounded-2xl bg-[#171a21] border transition-all duration-300 hover:-translate-y-1 ${
              tier.popular
                ? "border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.15)] scale-105 z-10"
                : "border-gray-800 hover:border-gray-700"
            }`}
          >
            {tier.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                Most Popular
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-sm text-gray-400">{tier.description}</p>
            </div>

            <div className="mb-8 flex items-baseline">
              <span className="text-4xl font-extrabold text-white">
                {tier.price}
              </span>
              {tier.period && (
                <span className="text-gray-400 ml-1">{tier.period}</span>
              )}
            </div>

            <button
              className={`mt-auto w-full py-3 px-4 rounded-xl font-semibold flex items-center justify-center transition-colors duration-200 ${
                tier.buttonVariant === "primary"
                  ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                  : tier.buttonVariant === "premium"
                    ? "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white"
                    : "bg-gray-800 hover:bg-gray-700 text-white"
              }`}
            >
              {tier.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Energy Costs Info Box */}
      <div className="max-w-3xl mx-auto mb-20">
        <div className="bg-[#171a21] border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500">
              <Zap className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Energy Costs
              </h3>
              <p className="text-sm text-gray-400">
                How energy is consumed across different actions.
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#0e1015] px-4 py-3 rounded-xl border border-gray-800 text-center">
              <div className="text-2xl font-bold text-amber-400 mb-1">5</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">
                Per Review (Rewind)
              </div>
            </div>
            <div className="bg-[#0e1015] px-4 py-3 rounded-xl border border-gray-800 text-center">
              <div className="text-2xl font-bold text-amber-400 mb-1">1</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">
                Per Hand (Practice)
              </div>
            </div>
            <div className="bg-[#0e1015] px-4 py-3 rounded-xl border border-gray-800 text-center">
              <div className="text-2xl font-bold text-amber-400 mb-1">1</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">
                Per Post-flop Hand
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Feature Comparison */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Compare all features
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-gray-800 bg-[#171a21]">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="p-6 border-b border-gray-800 w-1/3"></th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className="p-6 border-b border-gray-800 text-center w-1/6"
                  >
                    <div className="font-bold text-lg text-white">
                      {tier.name}
                    </div>
                    <div className="text-sm text-gray-400 font-normal">
                      {tier.price}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((category) => (
                <React.Fragment key={category.category}>
                  {/* Category Header */}
                  <tr>
                    <td
                      colSpan={5}
                      className="p-4 bg-[#1f232d] border-b border-gray-800 font-bold text-emerald-400 text-sm uppercase tracking-wider"
                    >
                      {category.category}
                    </td>
                  </tr>
                  {/* Feature Rows */}
                  {category.items.map((item) => (
                    <tr
                      key={item.name}
                      className="hover:bg-[#1a1e27] transition-colors"
                    >
                      <td className="p-4 border-b border-gray-800/50 text-gray-300 font-medium">
                        {item.name}
                      </td>
                      {item.values.map((value, i) => (
                        <td
                          key={i}
                          className="p-4 border-b border-gray-800/50 text-center"
                        >
                          {renderValue(value)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
