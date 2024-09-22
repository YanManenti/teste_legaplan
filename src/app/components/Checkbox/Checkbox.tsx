"use client";

import { useState } from "react";

type CheckboxProps = Readonly<{
  onChange: () => void;
}>;

export default function Checkbox({ onChange }: CheckboxProps) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    onChange();
    setChecked(!checked);
  };
  return (
    <div className="relative h-6 w-6">
      <input
        checked={checked}
        readOnly
        type="checkbox"
        className="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded border border-[#B0BBD1] checked:bg-[#A0DCF6] checked:border-[#0796D3]"
      />
      <span
        onClick={handleChange}
        className="absolute h-6 w-6  text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer"
      >
        <svg
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer"
          width="14"
          height="11"
          viewBox="0 0 14 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 1.5L4.75 9.75L1 6"
            stroke="#0796D3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}
