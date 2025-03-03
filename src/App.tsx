import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./components/layout/sidebar/appsidebar";
import RightSideMenu from "./components/layout/sidebar/RightSideMenu";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

// Calculate the height of the hero section (py-16 = 4rem, plus content)
const heroHeight = "calc(4rem + 120px)";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
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
            
            {/* Left Sidebar */}
            <div className="fixed left-0 bg-blue-100 overflow-y-auto flex flex-col" style={{ 
              width: '187.5px',
              top: heroHeight,
              bottom: 0,
              paddingTop: "0",
              borderRight: "1px solid #e5e7eb",
              height: "calc(100vh - " + heroHeight + ")"
            }}>
              <AppSidebar />
            </div>
            
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
              <main className="flex-grow overflow-y-auto" style={{ 
                marginTop: heroHeight,
                marginLeft: "187.5px",
                marginRight: "187.5px",
                padding: "20px"
              }}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/blog" element={<Blog />} />
                </Routes>
              </main>
              <Footer />
            </div>
            
            {/* Right Sidebar */}
            <div className="fixed right-0 bg-blue-100 overflow-y-auto flex flex-col" style={{ 
              width: '187.5px',
              top: heroHeight,
              bottom: 0,
              paddingTop: "0",
              borderLeft: "1px solid #e5e7eb",
              height: "calc(100vh - " + heroHeight + ")"
            }}>
              <RightSideMenu />
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
