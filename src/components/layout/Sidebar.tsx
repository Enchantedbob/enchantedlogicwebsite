import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, MessageSquare, DollarSign, Users, LogIn, Hash } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const AppSidebar = () => {
  const { toast } = useToast();
  const [showHitCount, setShowHitCount] = useState(false);
  
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
    <div className="hidden lg:flex h-screen w-64 flex-col fixed left-0 top-[300px] bottom-0 bg-background border-r overflow-y-auto">
      <div className="p-6">
        <span className="font-medium text-lg">Menu</span>
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
            <Link to="/services" className="flex items-center p-2 hover:bg-accent rounded-md space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>What We Do</span>
            </Link>
          </li>
          <li>
            <Link to="/blog" className="flex items-center p-2 hover:bg-accent rounded-md space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>Blog</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center p-2 hover:bg-accent rounded-md space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>Contact Us</span>
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="flex items-center p-2 hover:bg-accent rounded-md space-x-2">
              <DollarSign className="h-4 w-4" />
              <span>Pricing</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center p-2 hover:bg-accent rounded-md space-x-2">
              <Users className="h-4 w-4" />
              <span>About Us</span>
            </Link>
          </li>
          <li>
            <Link to="/remove-me" className="flex items-center p-2 hover:bg-accent rounded-md space-x-2">
              <Users className="h-4 w-4" />
              <span>Remove Me</span>
            </Link>
          </li>
          <li>
            <Link to="/login" className="flex items-center p-2 hover:bg-accent rounded-md space-x-2">
              <LogIn className="h-4 w-4" />
              <span>Staff Access</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t">
        <div 
          className="relative cursor-pointer"
          onMouseEnter={() => setShowHitCount(true)}
          onMouseLeave={() => setShowHitCount(false)}
        >
          <Hash className="h-6 w-6 text-primary hover:text-secondary transition-colors" />
          {showHitCount && (
            <div className="absolute -bottom-8 left-0 bg-white p-2 rounded shadow-lg">
              000001
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppSidebar;