import { Link } from "react-router-dom";
import { Home, Factory, ScrollText, Smartphone } from "lucide-react";
// import HitCounter from "@/components/layout/sidebar/HitCounter";

const SidebarNavigation = () => {
  return (
    <nav className="p-2" style={{ borderRight: 'none' }}>
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
        {/*<div data-component-path="src\pages\Index.tsx" data-component-name="div" data-component-line="32" data-component-file="Index.tsx" data-component-content="%7B%22className%22%3A%22flex-grow%20overflow-y-auto%20bg-white%22%7D" class="flex-grow overflow-y-auto bg-white"></div>*/}

        <li>          <Link to="/blog" className="flex items-center p-2 hover:bg-blue-200 rounded-md">
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
      </ul>
      
    </nav>
  );
};

export default SidebarNavigation;