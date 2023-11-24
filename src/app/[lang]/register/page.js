"use client";
import { useState } from "react";

export default function RegisterPage({ params: { lang } }) {
  const [emailForm, setEmailForm] = useState("");
  const [passwordForm, setPasswordForm] = useState("");

  function handleFormSubmit(ev) {
    ev.preventDefault();
    fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emailForm, passwordForm }),
      
    });
  }

  return (
    <section className={`${lang === "ar" ? "arabic-nav" : "english-nav"} mt-8`}>
      <h1 className="text-center text-red-500 text-4xl"></h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={emailForm}
          onChange={(e) => setEmailForm(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={passwordForm}
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
