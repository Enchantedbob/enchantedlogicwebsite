import { useState } from "react";
import { Hash } from "lucide-react";

const HitCounter = () => {
  const [showHitCount, setShowHitCount] = useState(false);

  return (
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
  );
};

export default HitCounter;