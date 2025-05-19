"use client";
import { sign_in } from "@/lib/actions";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginForm = ({ correct, setCorrect }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    document.querySelector(".password").classList.remove("wrong");

    await toast.promise(
      (async () => {
        try {
          const result = await sign_in(password);
          window.localStorage.setItem("admin", result.correct);
          setCorrect(result.correct);
          router.push("/auth/dashboard");
        } catch (err) {
          setError(err.message);
          document.querySelector(".password").classList.add("wrong");
          throw err; // مهم عشان toast يعرض رسالة الخطأ
        }
      })(),
      {
        loading: "Logging in...",
        success: "Logged in successfully!",
        error: (err) => err.message || "Login failed!",
      }
    );
  };

  return (
    <div className="login">
      <form action="" onSubmit={handleSubmit}>
        <h1>Log in</h1>
        <input type="text" value="Mohayyad Muawia" readOnly />

        <input
          type="password"
          className="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          required
          autoFocus
        />
        <span>{error}</span>

        <div className="btns">
          <Link href="/" className="sec-btn">
            <i className="fa-solid fa-reply-all"></i> Back to Home{" "}
          </Link>
          <button type="submit" className="main-btn">
            Log in <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
