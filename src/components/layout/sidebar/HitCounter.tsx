import { useState } from "react";
import { Hash } from "lucide-react";

const HitCounter = () => {
  const [showHitCount, setShowHitCount] = useState(false);

  return (
    <div 
      className="absolute bottom-4 left-4 cursor-pointer"
      onMouseEnter={() => setShowHitCount(true)}
      onMouseLeave={() => setShowHitCount(false)}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-secondary transition-colors">
        <Hash className="h-6 w-6 text-white" />
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