"use client";
import { useState } from "react";

export default function LoginPage({ params: { lang } }) {
  const [email, setEmailForm] = useState("");
  const [password, setPasswordForm] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
   setLoginInProgress(true);

   await signIn ('Credentials');

    setLoginInProgress(false);
  }
  return (
    <section
      className={`${
        lang === "ar" ? "arabic-nav" : "english-nav"
      } mt-8 h-screen`}
    >
      <h1 className="text-center text-red-500 text-4xl"> Login</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          disabled={loginInProgress}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmailForm(e.target.value)}
        />
        <input
          disabled={loginInProgress}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPasswordForm(e.target.value)}
        />
        <button
          type="submit"
          className="block w-full p-2 mt-2 text-white bg-red-500 rounded"
        >
          Register
        </button>
      </form>
    </section>
  );
}
