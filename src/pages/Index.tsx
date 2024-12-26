import { Link } from "react-router-dom";
import { Home, Factory, ScrollText, Smartphone } from "lucide-react";
import HitCounter from "@/components/layout/sidebar/HitCounter";
import SidebarNavigation from "@/components/layout/sidebar/SidebarNavigation";
import RightSideMenu from "@/components/layout/sidebar/RightSideMenu";

const Index = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section - Full Width */}
      <section className="w-full bg-gradient-to-r from-primary to-secondary text-white py-16 fixed top-0 left-0 right-0 z-10">
        <div className="px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enchanted Logic
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Transform your business with intelligent automation and custom solutions that will Make Money, Increase Efficiency and Save Time
            </p>
          </div>
        </div>
      </section>

      <div className="flex pt-56 mt-24">
        {/* Left Side Section - 1/8 width */}
        <section className="relative w-1/8 bg-blue-100 min-h-[400px]">
          <SidebarNavigation />
          <HitCounter />
        </section>

        {/* Main Content - 6/8 width */}
        <div className="flex-grow overflow-y-auto bg-white">
          {/* Content will be added here */}
        </div>

        {/* Right Side Section - 1/8 width */}
        <section className="relative w-1/8 bg-blue-100 min-h-[400px]">
          <RightSideMenu />
        </section>
      </div>

      {/* Chat Link - Fixed at the bottom right */}
      <div className="fixed bottom-0 right-0 p-2">
        <Link to="/chat" className="flex items-center p-2 hover:bg-blue-200 rounded-md">
          <Smartphone className="h-5 w-5" />
          <span className="ml-2 text-left text-base">Chat</span>
        </Link>
      </div>
    </div>
  );
};

export default Index;
