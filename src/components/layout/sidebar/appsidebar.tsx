import { Link } from "react-router-dom";
import { Home, Factory, ScrollText, Smartphone } from "lucide-react";
import "./AppSidebar.css";
import HitCounter from "./HitCounter";

const AppSidebar = () => {
  return (
    <section className="fixed left-0 top-56 w-1/8 bg-blue-100 min-h-[400px]" style={{ maxWidth: '12.5%' }}>
      <nav className="sidebar-nav left bg-blue-100 max-w-full">
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
        </ul>
      </nav>
      <HitCounter />
    </section>
  );
};

export default AppSidebar;