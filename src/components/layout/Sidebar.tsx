import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Home } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

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
    <div className="hidden lg:flex h-screen w-64 flex-col fixed left-0 top-0 bottom-0 bg-background border-r">
      <div className="p-6">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl">Enchanted Logic</span>
        </Link>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link to="/" className="flex items-center p-2 hover:bg-accent rounded-md space-x-2">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/login" className="flex items-center p-2 hover:bg-accent rounded-md space-x-2">
              <Users className="h-4 w-4" />
              <span>Staff Access</span>
            </Link>
          </li>
          <li>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AppSidebar;