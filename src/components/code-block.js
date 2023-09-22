"use client";

import { useRef, useState } from "react";
import { Icons } from "./icons";

export const CodeBlock = ({ children, className = "", ...props }) => {
  const [isClicked, setIsClicked] = useState(false);
  const code_area = useRef(null);

  const handleClick = (e) => {
    setIsClicked(true);
    navigator.clipboard.writeText(code_area.current.querySelector("pre").innerText);
    setTimeout(() => setIsClicked(false), 1000);
  };

  return (
    <div className={`relative group ${className}`} {...props} ref={code_area}>
      <div className="absolute right-[.5rem] top-[.5rem] hidden group-hover:block flex items-center">
        {isClicked && <span className="absolute right-0 top-1 h-6 flex items-center rounded translate-x-[-2.5rem] bg-black text-white text-xs px-2">¡Copied!</span>}

        <button onClick={handleClick} className="border border-gray-200 text-gray-500 bg-white w-8 h-8 grid place-items-center rounded">
          <Icons type="filter_none" width="22" height="22" />
        </button>
      </div>

      {children}
    </div>
  );
};
