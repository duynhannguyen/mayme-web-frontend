import React from "react";

const Button = ({ type = "button", children, name, ...restProps }) => {
  return (
    <button
      type={type}
      className="bg-blue-500 hover:bg-blue-700 text-white text-center mb-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      {...restProps}
    >
      {name}
    </button>
  );
};

export default Button;
