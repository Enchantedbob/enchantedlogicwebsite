import { Link } from "react-router-dom";
import { DollarSign, Users, ShieldCheck, Users as StaffIcon } from "lucide-react";




const RightSideMenu = () => {
  return (
    <nav className="p-2">
      <ul className="space-y-3">
        <li>
          <Link to="/pricing" className="flex items-center justify-end p-2 hover:bg-blue-200 rounded-md">
            <span className="mr-2 text-right text-base">Money</span>
            <DollarSign className="h-5 w-5" />
          </Link>
        </li>
        <li>
          <Link to="/about" className="flex items-center justify-end p-2 hover:bg-blue-200 rounded-md">
            <span className="mr-2 text-right text-base">About Us</span>
            <Users className="h-5 w-5" />
          </Link>
        </li>
        <li>
          <Link to="/staff" className="flex items-center justify-end p-2 hover:bg-blue-200 rounded-md">
            <span className="mr-2 text-right text-base">Staff</span>
            <StaffIcon className="h-5 w-5" />
          </Link>
        </li>
        <li>
          <Link to="/remove-me" className="flex items-center justify-end p-2 hover:bg-blue-200 rounded-md">
            <span className="mr-2 text-right text-base">GDPR+</span>
            <ShieldCheck className="h-5 w-5" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};


export default RightSideMenu;