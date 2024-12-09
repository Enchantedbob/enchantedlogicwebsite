import { useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

interface SignupFormProps {
  accessCode: string;
}

export function SignupForm({ accessCode }: SignupFormProps) {
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          try {
            const { error } = await supabase
              .from('access_codes')
              .update({ 
                is_used: true, 
                used_by: session.user.id,
                used_at: new Date().toISOString()
              })
              .eq('code', accessCode);

            if (error) {
              console.error('Error updating access code:', error);
              toast({
                title: "Error",
                description: "There was a problem updating your access code. Please contact support.",
                variant: "destructive"
              });
            }
          } catch (error) {
            console.error('Error in auth state change handler:', error);
          }
        }
      }
    );

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, [accessCode, toast]);

  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      theme="light"
      providers={[]}
      view="sign_up"
      redirectTo={window.location.origin}
    />
  );
}