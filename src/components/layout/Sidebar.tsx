import SidebarNavigation from "@/components/layout/sidebar/SidebarNavigation";
import HitCounter from "@/components/layout/sidebar/HitCounter";

const AppSidebar = () => {
  return (
    <div className="hidden lg:flex h-screen w-64 flex-col fixed left-0 top-0 bg-background  overflow-y-auto">
      <SidebarNavigation/>
      <HitCounter/>
    </div>
  );
};

export default AppSidebar;