"use client";

import { useState } from "react";
import Link from "next/link";
import LoginIcon from "@material-ui/icons/AccountCircle";
import { TheSidebar } from "@/components/base/TheSidebar";
import DarkMode from "@material-ui/icons/WbSunny";
import LightMode from "@material-ui/icons/WbSunnyOutlined";
import { Category } from "@/types/data";

export const TheHeader = ({ categories }: { categories: Category[] }) => {
  const [active, setActive] = useState(false);
  const [theme, setTheme] = useState(false);

  const headerStyle = active
    ? "sticky top-0 bg-white dark:bg-black-600 dark:text-white text-black-600 backdrop-blur-lg border-b-3 z-50 transition-colors"
    : "sticky top-0 bg-white-transparent dark:bg-black-transparent dark:text-white text-black-600 backdrop-blur-lg border-b-3 z-50 transition-colors";

  const closeModals = () => {
    document.querySelector("body")?.classList.remove("ReactModal__Body--open");
    setActive(false);
  };

  const switchTheme = () => {
    const body = document.querySelector("body");
    if (theme) {
      body?.classList.remove("dark");
      setTheme(false);
    } else {
      body?.classList.add("dark");
      setTheme(true);
    }
  };

  const modeIcon = () => {
    if (theme) {
      return <LightMode />;
    } else {
      return <DarkMode />;
    }
  };

  return (
    <header className={headerStyle}>
      <div className="dark:text-white custom-container mx-auto py-4 flex justify-between align-center">
        <div className="flex-1">
          <button
            onClick={() => (active ? closeModals() : setActive(true))}
            className={active ? `burger-button active` : `burger-button`}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className="flex-[3] flex justify-center">
          <Link
            href="/"
            className="font-bold text-2xl leading-[inherit] transition-colors hover:text-red dark:hover:text-toxic"
          >
            WEAR THIS.
          </Link>
        </div>

        <div className="flex-1 hidden sm:flex justify-end gap-4">
          <button
            className="h-10 w-24 border-3 text-lg font-bold transition-colors
             hover:text-white dark:hover:text-black dark:hover:border-white
             dark:hover:bg-white hover:bg-black-600 hover:border-black-600"
          >
            Log in
          </button>
          <button
            className="h-10 w-24 border-3 text-lg font-bold transition-colors
             hover:text-white dark:hover:text-black dark:hover:border-white
             dark:hover:bg-white hover:bg-black-600 hover:border-black-600"
          >
            Sign up
          </button>
          <button className="ml-4" onClick={switchTheme}>
            {modeIcon()}
          </button>
        </div>
        <div className="flex-1 flex sm:hidden justify-end">
          <button>
            <LoginIcon fontSize="large" />
          </button>
          <button className="ml-4" onClick={switchTheme}>
            {modeIcon()}
          </button>
        </div>
      </div>
      <TheSidebar
        active={active}
        setActive={setActive}
        closeModals={closeModals}
        categories={categories}
      />
    </header>
  );
};
