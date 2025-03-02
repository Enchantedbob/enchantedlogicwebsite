import { useState } from "react";
import { Hash } from "lucide-react";
import "./AppSidebar.css";

const HitCounter = () => {
  const [showHitCount, setShowHitCount] = useState(false);

  return (
    <div 
      className="hit-counter-container cursor-pointer"
      onMouseEnter={() => setShowHitCount(true)}
      onMouseLeave={() => setShowHitCount(false)}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-secondary transition-colors">
        <Hash className="h-8 w-8 text-white" />
      </div>
      {showHitCount && (
        <div className="absolute -top-8 left-0 bg-white p-2 rounded shadow-lg">
          000001
        </div>
      )}
    </div>
  );
};

export default HitCounter;