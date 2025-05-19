"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";
import "./dashboard/dashboard.css";

const Login = () => {
  const [correct, setCorrect] = useState(undefined);
  const router = useRouter();

  useEffect(() => {
    const storedAdmin = window.localStorage.getItem("admin");
    if (storedAdmin === "true") {
      // Redirect safely AFTER render
      router.replace("/auth/dashboard");
    } else {
      setCorrect(false); // Allow LoginForm to show
    }
  }, [router]);

  // ✅ عرض فارغ أثناء التحقق
  if (correct === undefined) return null;

  return <LoginForm correct={correct} setCorrect={setCorrect} />;
};

export default Login;
