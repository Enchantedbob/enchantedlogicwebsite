import { Link } from "react-router-dom";
import { Home, Factory, ScrollText, Smartphone } from "lucide-react";
// import HitCounter from "@/components/layout/sidebar/HitCounter";

const SidebarNavigation = () => {
  return (
    <nav className="p-2">
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
            <span className="ml-2 text-left text-base">We Make</span>
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
            <span className="ml-2 text-left text-base">Reach Us</span>
          </Link>
        </li>
      </ul>
      {/* <HitCounter /> */}
    </nav>
  );
};

export default SidebarNavigation;