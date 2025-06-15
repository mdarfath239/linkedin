
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogIn, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { toast } from "@/components/ui/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { user, loading } = useSupabaseAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signingIn, setSigningIn] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      navigate("/");
    }
  }, [loading, user, navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setSigningIn(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setSigningIn(false);
    if (error) {
      toast({
        title: "Sign In Failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      // Auth state will redirect if successful
      toast({
        title: "Signed in!",
        description: "Welcome back 👋",
      });
    }
  };

  const handleGoogleAuth = async () => {
    setSigningIn(true);
    const redirectTo = `${window.location.origin}/`;
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo } });
    setSigningIn(false);
    if (error) {
      toast({
        title: "Google Sign In Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f3f6f8] px-4">
      {/* Nav bar mimic */}
      <div className="w-full flex items-center justify-between max-w-lg mx-auto pt-6">
        <div className="flex items-center gap-1 text-3xl font-bold text-[#0A66C2]">
          Linked
          <span className="bg-[#0A66C2] px-2 py-0.5 rounded text-white">in</span>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="border-2 text-[#0A66C2] font-semibold border-[#0A66C2] rounded-full px-6 py-2"
            onClick={() => navigate("/signup")}
          >
            Join now
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-6 py-2 font-semibold border-[#0A66C2] text-[#0A66C2]"
            onClick={() => navigate("/login")}
          >
            Sign in
          </Button>
        </div>
      </div>
      {/* Main card */}
      <div className="w-full max-w-lg bg-white rounded-xl shadow mt-12 px-2 py-8 md:p-12 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-center mb-2">
          Welcome to your professional community
        </h2>
        {/* Auth buttons */}
        <Button
          className="w-full flex items-center justify-center bg-[#fff] text-gray-700 border-2 border-gray-200 rounded-full mt-6 mb-2 hover:bg-gray-50 shadow"
          disabled={signingIn}
          onClick={handleGoogleAuth}
        >
          <img
            alt="Google"
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
            className="h-5 w-5 mr-2"
          />
          Continue with Google
        </Button>
        <div className="w-full border-t my-4"></div>
        {/* Email/password form */}
        <form className="w-full space-y-3" onSubmit={handleSignIn}>
          <Input
            type="email"
            placeholder="Email"
            className="w-full"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={signingIn}
          />
          <Input
            type="password"
            placeholder="Password"
            className="w-full"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={signingIn}
          />
          <Button
            type="submit"
            className="w-full flex items-center justify-center bg-[#0A66C2] text-white font-semibold shadow-sm hover:bg-[#004182] rounded-full"
            disabled={signingIn}
          >
            <LogIn className="mr-2" />
            {signingIn ? "Signing in..." : "Sign in with email"}
          </Button>
        </form>
        <div className="text-xs text-center text-muted-foreground mt-4 mb-6 px-4">
          By clicking Continue to join or sign in, you agree to LinkedClone's{" "}
          <a href="#" className="text-[#0A66C2] underline">User Agreement</a>,{" "}
          <a href="#" className="text-[#0A66C2] underline">Privacy Policy</a>, and{" "}
          <a href="#" className="text-[#0A66C2] underline">Cookie Policy</a>.
        </div>
        {/* New user? */}
        <div className="mb-6">
          <span className="text-gray-600">New to LinkedClone? </span>
          <button
            className="text-[#0A66C2] font-semibold hover:underline"
            onClick={() => navigate("/signup")}
            type="button"
          >
            Join now
          </button>
        </div>
        {/* Illustration */}
        <div className="w-full flex justify-center">
          <img
            alt="Illustration"
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80"
            className="w-64 h-40 object-contain"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
