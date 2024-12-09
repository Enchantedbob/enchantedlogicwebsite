import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AccessCodeVerification } from "@/components/auth/AccessCodeVerification";
import { SignupForm } from "@/components/auth/SignupForm";

export default function Signup() {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);
  const [verifiedCode, setVerifiedCode] = useState("");

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/");
      }
    });
  }, [navigate]);

  const handleVerified = (code: string) => {
    setVerifiedCode(code);
    setIsVerified(true);
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Welcome to EnchantedLogic.com</CardTitle>
        </CardHeader>
        <CardContent>
          {!isVerified ? (
            <AccessCodeVerification onVerified={handleVerified} />
          ) : (
            <SignupForm accessCode={verifiedCode} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}