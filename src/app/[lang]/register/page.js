"use client";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage({ params: { lang } }) {
  const [email, setEmailForm] = useState("");
  const [password, setPasswordForm] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      setUserCreated(false);
    } else {
      setError(true);
    }
    setUserCreated(true);
  }

  return (
    <section
      className={`${
        lang === "ar" ? "arabic-nav" : "english-nav"
      } mt-8 h-screen`}
    >
      <h1 className="text-center text-red-500 text-4xl"> Register</h1>

      {userCreated && (
        <div className="my-4">
          User created. Now you can login
          <Link className="underline" href={`/${lang}/login`}>
            Login
          </Link>
        </div>
      )}
      {error && <div className="my-4">Error creating user</div>}

      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          disabled={creatingUser}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmailForm(e.target.value)}
        />
        <input
          disabled={creatingUser}
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

      <div className="flex justify-center mt-4">
        <Link href={`/${lang}/login`}>
          <p className=" underline"> Already have an account? Login &raquo;</p>
        </Link>
      </div>
    </section>
  );
}
