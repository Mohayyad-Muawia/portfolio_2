"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";

export default function Welcome() {
  useEffect(() => {
    const welcomeToast = toast("Welcome to my space!", {
      icon: "👋",
      style: {
        fontSize: "1.2rem",
        fontFamily: "cursive",
      },
      duration: 6000,
    });

    return () => {
      toast.dismiss(welcomeToast);
    };
  }, []);

  return <></>;
}
