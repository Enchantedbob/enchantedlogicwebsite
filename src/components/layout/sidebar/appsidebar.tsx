import { Link } from "react-router-dom";
import { Home, Factory, ScrollText, Smartphone, Users, HelpCircle } from "lucide-react";
import "./appsidebar.css";
import HitCounter from "./HitCounter";

const AppSidebar = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <nav className="sidebar-nav left bg-blue-100 w-full">
        <ul className="space-y-3">
          <li>
            <Link to="/" className="flex items-center p-2 hover:bg-blue-200 rounded-md">
              <Home className="h-5 w-5" />
              <span className="ml-2 text-left text-base">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/services" className="flex items-center p-2 hover:bg-blue-200 rounded-md">
              <Factory className="h-5 w-5" />
              <span className="ml-2 text-left text-base">Services</span>
            </Link>
          </li>
          <li>
            <Link to="/blog" className="flex items-center p-2 hover:bg-blue-200 rounded-md">
              <ScrollText className="h-5 w-5" />
              <span className="ml-2 text-left text-base">Blog</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center p-2 hover:bg-blue-200 rounded-md">
              <Smartphone className="h-5 w-5" />
              <span className="ml-2 text-left text-base">Contact</span>
            </Link>
          </li>
          <li>
            <Link to="/login" className="flex items-center p-2 hover:bg-blue-200 rounded-md">
              <Users className="h-5 w-5" />
              <span className="ml-2 text-left text-base">Login</span>
            </Link>
          </li>
          <li>
            <Link to="/signup" className="flex items-center p-2 hover:bg-blue-200 rounded-md">
              <Users className="h-5 w-5" />
              <span className="ml-2 text-left text-base">Signup</span>
            </Link>
          </li>
          <li>
            <Link to="/faq" className="flex items-center p-2 hover:bg-blue-200 rounded-md">
              <HelpCircle className="h-5 w-5" />
              <span className="ml-2 text-left text-base">FAQ</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-auto p-2 flex justify-start pl-0">
        <HitCounter />
      </div>
    </div>
  );
};

export default AppSidebar;
