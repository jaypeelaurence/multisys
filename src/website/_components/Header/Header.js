import React, { useState } from "react";
import { useRouter } from "next/router";
import HeaderWrapper from "./HeaderWrapper";

const Header = () => {
  const [mobile, setMobile] = useState("hidden");

  const menu = [
    {
      link: "",
      name: "Home",
    },
    {
      link: "todo/create",
      name: "Create",
    },
  ];

  const onChangeButton = () =>
    setMobile(mobile === "hidden" ? "md:hidden" : "hidden");

  const pathname = useRouter().pathname.split("/");

  const renderMenu = menu.map(({ link, name }, i) => {
    let active;

    if (link === `${pathname[1]}/${pathname[2]}`) {
      active = true;
    }

    if (!pathname[1] && i === 0) {
      active = true;
    }

    return (
      <a
        href={`/${link}`}
        className={[
          active ? "bg-gray-900" : "",
          "text-white",
          "block",
          "px-3",
          "py-2",
          "rounded-md",
          "text-base",
          "font-medium",
        ].join(" ")}
        key={link}
      >
        {name}
      </a>
    );
  });

  return (
    <HeaderWrapper>
      <nav className="bg-gray-800">
        <div
          className={[
            "max-w-7xl",
            "mx-auto",
            "px-4",
            "sm:px-6",
            "lg:px-8",
          ].join(" ")}
        >
          <div className={["flex items-center justify-between h-16"]}>
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 menuItem">
                  {renderMenu}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className={[
                  "bg-gray-800",
                  "inline-flex",
                  "items-center",
                  "justify-center",
                  "p-2",
                  "rounded-md",
                  "text-gray-400",
                  "hover:text-white",
                  "hover:bg-gray-700",
                  "focus:outline-none",
                  "focus:ring-2",
                  "focus:ring-offset-2",
                  "focus:ring-offset-gray-800",
                  "focus:ring-white",
                ].join(" ")}
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={onChangeButton}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={["block", "h-6 w-6"].join(" ")}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={["hidden", "h-6", "w-6"].join(" ")}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={mobile} id="mobile-menu">
          <div
            className={["px-2", "pt-2", "pb-3", "space-y-1", "sm:px-3"].join(
              " "
            )}
          >
            {renderMenu}
          </div>
        </div>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
