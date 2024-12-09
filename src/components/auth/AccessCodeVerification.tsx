import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";

interface AccessCodeVerificationProps {
  onVerified: (code: string) => void;
}

export function AccessCodeVerification({ onVerified }: AccessCodeVerificationProps) {
  const [accessCode, setAccessCode] = useState("");
  const { toast } = useToast();

  const verifyAccessCode = async () => {
    const { data, error } = await supabase
      .from('access_codes')
      .select('*')
      .eq('code', accessCode)
      .eq('is_used', false)
      .single();

    if (error) {
      toast({
        title: "Error",
        description: "Failed to verify access code",
        variant: "destructive",
      });
      return;
    }

    if (!data) {
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
  };

  return (
    <div className="space-y-4">
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
      </div>
      <Button 
        className="w-full" 
        onClick={verifyAccessCode}
        disabled={!accessCode}
      >
        Verify Code
      </Button>
    </div>
  );
}