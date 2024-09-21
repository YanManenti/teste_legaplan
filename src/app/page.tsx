"use client";
import { useMemo } from "react";
import Button from "./components/Button/Button";
import Option from "./components/Option/Option";

export default function Home() {
  const date = useMemo(() => new Date(), []);
  const locale = "pt-BR";

  const day = date.toLocaleString(locale, { day: "numeric" });
  const month = date.toLocaleString(locale, { month: "long" });
  const year = date.toLocaleString(locale, { year: "numeric" });
  const weekday = date.toLocaleString(locale, {
    weekday: "long",
  });
  const capitalizedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full justify-between items-center pb-6 separatingBorder">
        <img src="./icon.svg" />
        <h1 className="text-[length:--titleSize] font-medium h-fit">
          Bem-vindo de volta, Marcus
        </h1>
        <h3 className="text-[--secondary] text-[length:--textSize] font-normal h-fit">
          {capitalizedWeekday}, {day} de {month} de {year}
        </h3>
      </div>
      <Option text="OPÇÃO" onFinish={() => {}} onDelete={() => {}} />
      <Button onClick={() => {}} text="BOTÃO" className="primaryButton" />
    </div>
  );
}
