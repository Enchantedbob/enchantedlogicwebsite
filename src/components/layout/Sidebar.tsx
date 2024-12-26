import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import SidebarNavigation from "./sidebar/SidebarNavigation";
import HitCounter from "./sidebar/HitCounter";

const AppSidebar = () => {
  const { toast } = useToast();
  
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out successfully",
        description: "You have been signed out of your account.",
      });
    }
  };

  return (
    <div className="hidden lg:flex h-screen w-64 flex-col fixed left-0 top-[360px] bg-background border-r overflow-y-auto">
            <SidebarNavigation />
      <HitCounter />
    </div>
  );
};

export default AppSidebar;