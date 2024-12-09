import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/lib/supabase";

interface SignupFormProps {
  accessCode: string;
}

export function SignupForm({ accessCode }: SignupFormProps) {
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      theme="light"
      providers={[]}
      view="sign_up"
      redirectTo={window.location.origin}
      onAuthSuccess={async (session) => {
        if (session?.user) {
          await supabase
            .from('access_codes')
            .update({ 
              is_used: true, 
              used_by: session.user.id,
              used_at: new Date().toISOString()
            })
            .eq('code', accessCode);
        }
      }}
    />
  );
}