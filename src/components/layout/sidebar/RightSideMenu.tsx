import { Link } from "react-router-dom";
import { DollarSign, Users, ShieldCheck, Users as StaffIcon, MessageCircle, HelpCircle, Settings, BookOpen } from "lucide-react";
import { useState } from "react";

const RightSideMenu = () => {
  const [showChatWindow, setShowChatWindow] = useState(false);
  
  return (
    <div className="h-full flex flex-col p-2 pt-4">
      <div>
      <div className="mb-2">
        <Link to="/pricing" className="flex items-center justify-end p-2 hover:bg-blue-200 rounded-md">
          <span className="mr-2 text-right text-base">Money</span>
          <DollarSign className="h-5 w-5" />
        </Link>
      </div>
      <div className="mb-2">
        <Link to="/about" className="flex items-center justify-end p-2 hover:bg-blue-200 rounded-md">
          <span className="mr-2 text-right text-base">About Us</span>
          <Users className="h-5 w-5" />
        </Link>
      </div>
      <div className="mb-2">
        <Link to="/staff" className="flex items-center justify-end p-2 hover:bg-blue-200 rounded-md">
          <span className="mr-2 text-right text-base">Staff</span>
          <StaffIcon className="h-5 w-5" />
        </Link>
      </div>
      <div className="mb-2">
        <Link to="/remove-me" className="flex items-center justify-end p-2 hover:bg-blue-200 rounded-md">
          <span className="mr-2 text-right text-base">GDPR+</span>
          <ShieldCheck className="h-5 w-5" />
        </Link>
      </div>
      <div className="mb-2">
        <Link to="/help" className="flex items-center justify-end p-2 hover:bg-blue-200 rounded-md">
          <span className="mr-2 text-right text-base">Help</span>
          <HelpCircle className="h-5 w-5" />
        </Link>
      </div>
      <div className="mb-2">
        <Link to="/documentation" className="flex items-center justify-end p-2 hover:bg-blue-200 rounded-md">
          <span className="mr-2 text-right text-base">Documentation</span>
          <BookOpen className="h-5 w-5" />
        </Link>
      </div>
      </div>
      
      <div className="mt-auto p-2 flex justify-end pr-0">
        <div 
          className="cursor-pointer"
          onClick={() => setShowChatWindow(!showChatWindow)}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-secondary transition-colors">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
          {showChatWindow && (
            <div className="absolute -top-8 right-0 bg-white p-2 rounded shadow-lg">
              Chat coming soon!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RightSideMenu;
