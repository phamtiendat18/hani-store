import React from "react";

function NavBar({ links }) {
  return (
    <nav className="flex flex-col items-center px-16 pt-3 pb-1.5 w-full text-xl font-medium text-black bg-rose-100 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-center max-md:max-w-full">
        {links.map((link) => (
          <button
            key={link}
            className="self-stretch my-auto hover:text-rose-500 focus:outline-none focus:text-rose-500"
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
