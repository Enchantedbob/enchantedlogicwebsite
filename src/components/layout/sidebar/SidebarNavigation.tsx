import { Link } from "react-router-dom";
import { Home, Factory, ScrollText, Smartphone, DollarSign, Users, ShieldCheck, Users as StaffIcon } from "lucide-react";

const SidebarNavigation = () => {
  
  return (
    <div className="flex flex-col w-full">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold text-primary">Enchanted Logic</h1>
      </div>
     
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link to="/" className="flex items-center p-2 hover:bg-accent/10 rounded-md text-sm">
              <Home className="h-4 w-4 mr-2" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/services" className="flex items-center p-2 hover:bg-accent/10 rounded-md text-sm">
              <Factory className="h-4 w-4 mr-2" />
              <span>We Make stuff</span>
            </Link>
          </li>
          <li>
            <Link to="/blog" className="flex items-center p-2 hover:bg-accent/10 rounded-md text-sm">
              <ScrollText className="h-4 w-4 mr-2" />
              <span>Blog</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center p-2 hover:bg-accent/10 rounded-md text-sm">
              <Smartphone className="h-4 w-4 mr-2" />
              <span>Reach Us</span>
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="flex items-center p-2 hover:bg-accent/10 rounded-md text-sm">
              <DollarSign className="h-4 w-4 mr-2" />
              <span>Money</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center p-2 hover:bg-accent/10 rounded-md text-sm">
              <Users className="h-4 w-4 mr-2" />
              <span>Team</span>
            </Link>
          </li>
          <li>
            <Link to="/staff" className="flex items-center p-2 hover:bg-accent/10 rounded-md text-sm">
              <StaffIcon className="h-4 w-4 mr-2" />
              <span>Staff</span>
            </Link>
          </li>
          <li>
            <Link to="/remove-me" className="flex items-center p-2 hover:bg-accent/10 rounded-md text-sm">
              <ShieldCheck className="h-4 w-4 mr-2" />
              <span>GDPR+</span>
            </Link>
          </li>
        </ul>
      </nav>
    
    </div>
  
  );


};

export default SidebarNavigation;