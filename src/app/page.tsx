"use client";
import { useMemo } from "react";
import Button from "./custom_components/Button/Button";
import Option from "./custom_components/Option/Option";
import AdaptivePanel from "./custom_components/AdaptivePanel/AdaptivePanel";

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
    <div className="flex flex-col items-center py-6 px-14">
      <div className="flex w-full justify-between items-center pb-6 separatingBorder relative">
        <img src="./icon.svg" />
        <h1 className="text-[length:--titleSize] font-medium h-fit absolute left-1/2 transform -translate-x-1/2">
          Bem-vindo de volta, Marcus
        </h1>
        <h3 className="text-[--secondary] text-[length:--textSize] font-[--normalWeight] h-fit">
          {capitalizedWeekday}, {day} de {month} de {year}
        </h3>
      </div>
      <div className="p-8 flex flex-col gap-6">
        <h3 className="text-[--secondary] text-[length:--textSize] font-[--normalWeight] h-fit w-full text-center">
          Suas tarefas hoje
        </h3>
        <Option text="OPÇÃO" onFinish={() => {}} onDelete={() => {}} />
        <h3 className="text-[--secondary] text-[length:--textSize] font-[--normalWeight] h-fit w-full text-center">
          Tarefas finalizadas
        </h3>
      </div>

      <AdaptivePanel
        trigger={
          <Button onClick={() => {}} text="BOTÃO" className="primaryButton" />
        }
      >
        <p>children</p>
      </AdaptivePanel>
    </div>
  );
}
