import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";

interface AccessCodeVerificationProps {
  onVerified: (code: string) => void;
}

export function AccessCodeVerification({ onVerified }: AccessCodeVerificationProps) {
  const [accessCode, setAccessCode] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && isLocked) {
      setIsLocked(false);
      window.location.reload();
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timeRemaining, isLocked]);

  const checkAttempts = async (ipAddress: string) => {
    const { data: attempts } = await supabase
      .from('access_attempts')
      .select('*')
      .eq('ip_address', ipAddress)
      .single();

    if (attempts) {
      if (attempts.locked_until && new Date(attempts.locked_until) > new Date()) {
        const remainingTime = Math.ceil((new Date(attempts.locked_until).getTime() - new Date().getTime()) / 1000);
        setTimeRemaining(remainingTime);
        setIsLocked(true);
        return true;
      }
      
      if (attempts.attempt_count >= 5) {
        const lockedUntil = new Date(Date.now() + 2 * 60 * 1000); // 2 minutes
        await supabase
          .from('access_attempts')
          .update({ 
            locked_until: lockedUntil.toISOString(),
            attempt_count: 1
          })
          .eq('ip_address', ipAddress);
        
        setTimeRemaining(120); // 2 minutes in seconds
        setIsLocked(true);
        return true;
      }

      await supabase
        .from('access_attempts')
        .update({ 
          attempt_count: attempts.attempt_count + 1,
          last_attempt_at: new Date().toISOString()
        })
        .eq('ip_address', ipAddress);
    } else {
      await supabase
        .from('access_attempts')
        .insert([{ ip_address: ipAddress }]);
    }
    return false;
  };

  const verifyAccessCode = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const { ip } = await response.json();
      
      const isBlocked = await checkAttempts(ip);
      if (isBlocked) {
        toast({
          title: "Access Blocked",
          description: `Too many attempts. Please wait ${Math.ceil(timeRemaining / 60)} minutes before trying again.`,
          variant: "destructive",
        });
        return;
      }

      const { data, error } = await supabase
        .from('access_codes')
        .select('*')
        .eq('code', accessCode)
        .eq('is_used', false)
        .single();

      if (error || !data) {
        setAccessCode("");
        toast({
          title: "Invalid Code",
          description: "Please enter a valid access code",
          variant: "destructive",
        });
        return;
      }

      onVerified(accessCode);
      toast({
        title: "Success",
        description: "Access code verified successfully",
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "An error occurred while verifying the code",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-4">
      {isLocked ? (
        <div className="text-center space-y-2">
          <p className="text-red-500">Too many unsuccessful attempts</p>
          <p>Please wait {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')} before trying again</p>
        </div>
      ) : (
        <div className="space-y-2">
          <label htmlFor="accessCode" className="text-sm font-medium">
            Access Code
          </label>
          <Input
            id="accessCode"
            type="text"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            placeholder="Enter your access code"
          />
          <Button 
            className="w-full" 
            onClick={verifyAccessCode}
            disabled={!accessCode || isLocked}
          >
            Verify Code
          </Button>
        </div>
      )}
    </div>
  );
}