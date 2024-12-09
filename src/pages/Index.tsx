import { Link } from "react-router-dom";
import { Home, BookOpen, MessageSquare, DollarSign, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section - Full Width */}
      <section className="w-full bg-gradient-to-r from-primary to-secondary text-white py-20">
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

      <div className="flex">
        {/* Left Side Section - 20% width */}
        <section className="w-1/5 bg-blue-100 min-h-[400px]">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link to="/" className="flex items-center p-2 hover:bg-blue-200 rounded-md space-x-2">
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center p-2 hover:bg-blue-200 rounded-md space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>What We Do</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="flex items-center p-2 hover:bg-blue-200 rounded-md space-x-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center p-2 hover:bg-blue-200 rounded-md space-x-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="flex items-center p-2 hover:bg-blue-200 rounded-md space-x-2">
                  <DollarSign className="h-4 w-4" />
                  <span>Pricing</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center p-2 hover:bg-blue-200 rounded-md space-x-2">
                  <Users className="h-4 w-4" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/remove-me" className="flex items-center p-2 hover:bg-blue-200 rounded-md space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Remove Me</span>
                </Link>
              </li>
            </ul>
          </nav>
        </section>

        {/* Main Content - 80% width */}
        <div className="w-4/5">
          {/* Content will be added here */}
        </div>
      </div>
    </div>
  );
};

export default Index;
