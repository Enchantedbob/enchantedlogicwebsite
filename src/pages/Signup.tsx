import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function Signup() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [accessCode, setAccessCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/");
      }
    });
  }, [navigate]);

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

    setIsVerified(true);
    toast({
      title: "Success",
      description: "Access code verified successfully",
    });
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Create Account</CardTitle>
        </CardHeader>
        <CardContent>
          {!isVerified ? (
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
          ) : (
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="light"
              providers={[]}
              view="sign_up"
              onSuccess={async (session) => {
                // Mark access code as used
                await supabase
                  .from('access_codes')
                  .update({ 
                    is_used: true, 
                    used_by: session.user.id,
                    used_at: new Date().toISOString()
                  })
                  .eq('code', accessCode);
              }}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}