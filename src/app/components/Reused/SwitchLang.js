"use client";

import { useRouter } from "next/navigation";
import React from "react";

const SwitchLang = () => {
  const router = useRouter();

  const switchLang = (lang) => {
    router.push(`/${lang}`);
  };

  return (
    <div className="flex">
      <button onClick={() => switchLang("en")}>EN</button>
      <button onClick={() => switchLang("ar")}>AR</button>
      <button onClick={() => switchLang("studio")}>Studio</button>
    </div>
  );
};

export default SwitchLang;
