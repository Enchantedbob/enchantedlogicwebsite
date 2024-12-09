import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="animate-fade-in">
      {/* Pricing Features Section */}
      <section className="py-20">
        <div className="px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Pricing Options
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
  );
};

export default Pricing;