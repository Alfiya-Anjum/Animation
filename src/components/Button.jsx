import React from "react";

const Button = ({ id, title, rightIcon, leftIcon,onClick, containerClass }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-6 py-2 text-black flex items-center gap-2 ${containerClass}`}
    >
      {leftIcon}

      <span className="font-general text-xs uppercase">{title}</span>

     { rightIcon}
    </button>
  );
};

export default Button;
