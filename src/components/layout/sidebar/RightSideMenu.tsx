import { Link } from "react-router-dom";
import { DollarSign, Users, ShieldCheck, Users as StaffIcon } from "lucide-react";

const RightSideMenu = () => {
  return (
    <nav className="p-2">
      <ul className="space-y-3">
        <li>
          <Link to="/pricing" className="flex items-center p-2 hover:bg-blue-200 rounded-md">
            <DollarSign className="h-5 w-5" />
            <span className="ml-2 text-left text-base">Money</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="flex items-center p-2 hover:bg-blue-200 rounded-md">
            <Users className="h-5 w-5" />
            <span className="ml-2 text-left text-base">About Us</span>
          </Link>
        </li>
        <li>
          <Link to="/staff" className="flex items-center p-2 hover:bg-blue-200 rounded-md">
            <StaffIcon className="h-5 w-5" />
            <span className="ml-2 text-left text-base">Staff</span>
          </Link>
        </li>
        <li>
          <Link to="/remove-me" className="flex items-center p-2 hover:bg-blue-200 rounded-md">
            <ShieldCheck className="h-5 w-5" />
            <span className="ml-2 text-left text-base">GDPR+</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default RightSideMenu;