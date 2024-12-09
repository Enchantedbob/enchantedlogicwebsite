import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      {/* Fixed Chat Button */}
      <div className="fixed bottom-4 right-4">
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