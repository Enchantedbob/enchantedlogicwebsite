import { Link } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const menuItems = [
    { label: "Blog", path: "/blog" },
    { label: "What We Do", path: "/services" },
    { label: "About Us", path: "/about" },
    { label: "Pricing", path: "/pricing" },
    { label: "Remove Me", path: "/remove-me" },
  ];

  return (
    <footer className="bg-gray-100 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-text hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p>Let us help you enhance your business logic.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Hit Counter</h3>
            <div className="bg-white p-2 rounded inline-block">
              <span className="font-mono">000001</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Contact Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
        <button
          onClick={() => window.location.href = "mailto:contact@enchantedlogic.com"}
          className="bg-primary text-white p-3 rounded-full hover:bg-secondary transition-colors"
        >
          <Mail size={24} />
        </button>
        <button
          onClick={() => window.open("sms:+1234567890")}
          className="bg-primary text-white p-3 rounded-full hover:bg-secondary transition-colors"
        >
          <MessageCircle size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;