import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/lib/supabase";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-center">Staff Login</h1>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
          redirectTo={`${window.location.origin}/`}
        />
        <div className="mt-4 text-center">
          <Link to="/signup" className="text-primary hover:underline">
            Need to create an account? Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;