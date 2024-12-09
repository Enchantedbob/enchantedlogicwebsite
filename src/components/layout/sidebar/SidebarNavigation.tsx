import { Link } from "react-router-dom";
import { Home, Factory, Smartphone, ScrollText, DollarSign, Users, LogIn, ShieldCheck, Users as StaffIcon } from "lucide-react";

interface NavItem {
  to: string;
  icon: React.ComponentType<any>;
  label: string;
}

const navItems: NavItem[] = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/services", icon: Factory, label: "We Make" },
  { to: "/blog", icon: ScrollText, label: "Blog" },
  { to: "/contact", icon: Smartphone, label: "Reach Us" },
  { to: "/pricing", icon: DollarSign, label: "Money" },
  { to: "/about", icon: Users, label: "Team" },
  { to: "/staff", icon: StaffIcon, label: "Staff" },
  { to: "/remove-me", icon: ShieldCheck, label: "GDPR+" },
  { to: "/login", icon: LogIn, label: "Staff Access" },
];

const SidebarNavigation = () => {
  return (
    <nav className="flex-1 p-4">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="flex items-center p-2 hover:bg-accent rounded-md space-x-2"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNavigation;