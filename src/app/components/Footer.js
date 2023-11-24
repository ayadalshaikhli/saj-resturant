import Link from "next/link";
import React from "react";

export default function Footer({ dict = {}, lang }) {
  const { copyright, privacyPolicy, termsOfService } = dict?.footer || {};
  return (
    <footer>
      <div
        className={`${
          lang === "ar" ? "arabic-nav" : "english-nav"
        } flex justify-between items-center p-4 bg-red-100`}
      >
        <ul className="">
          <li>
            <Link href="/">{copyright}</Link>
          </li>
          <li>
            <Link href="/about">{privacyPolicy}</Link>
          </li>
          <li>
            <Link href="/contact">{termsOfService}</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
