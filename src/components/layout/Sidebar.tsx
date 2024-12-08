import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { BookOpen, HelpCircle, Info, DollarSign } from "lucide-react";

const menuItems = [
  { label: "Blog", path: "/blog", icon: BookOpen },
  { label: "What We Do", path: "/services", icon: HelpCircle },
  { label: "About Us", path: "/about", icon: Info },
  { label: "Pricing", path: "/pricing", icon: DollarSign },
];

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/favicon.ico" alt="Favicon" className="w-8 h-8" />
          <img src="/banner.png" alt="Enchanted Logic" className="h-12" />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton asChild>
                <Link to={item.path}>
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;