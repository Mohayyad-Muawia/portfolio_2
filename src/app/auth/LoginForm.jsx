"use client";
import { sign_in } from "@/lib/actions";
import Link from "next/link";
import { useState } from "react";

const LoginForm = ({ correct, setCorrect }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    document.querySelector(".password").classList.remove("wrong");

    // const response = await fetch(
    //   "https://portfolio-2fp9.onrender.com/projects/sign",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ password }),
    //   }
    // );
    // const json = await response.json();

    const result = await sign_in(password);
    if (result && result.error) {
      setError(result.error);
      document.querySelector(".password").classList.add("wrong");
    }

    window.localStorage.setItem("admin", result.correct);
    setCorrect(result.correct);
  };

  return (
    <>
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
    </>
  );
};

export default LoginForm;
