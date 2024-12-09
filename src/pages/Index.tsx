import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section - Full Width */}
      <section className="w-full bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enchanted Logic
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Transform your business with intelligent automation and custom solutions that will Make Money, Increase Efficiency and Save Time
            </p>
          </div>
        </div>
      </section>

      <div className="flex">
        {/* Left Side Section - 20% width */}
        <section className="w-1/5 bg-blue-100 min-h-[400px]">
          {/* This section will be above the Chat icon height */}
        </section>

        {/* Main Content - 80% width */}
        <div className="w-4/5">
          {/* Features Section */}
          <section className="py-20">
            <div className="px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose Enchanted Logic?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Custom Solutions",
                    description: "Tailored automation and AI solutions for your unique business needs",
                  },
                  {
                    title: "Expert Team",
                    description: "Experienced professionals dedicated to your success",
                  },
                  {
                    title: "Proven Results",
                    description: "Track record of delivering measurable business improvements",
                  },
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;