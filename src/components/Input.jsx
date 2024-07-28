import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-100 w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 pr-2 rounded-lg bg-white text-black outline-none border w-full w-100 ${className}`}
        {...props}
        ref={ref}
        id={id}
      />
    </div>
  );
});

export default Input;
