"use client";

import { useState } from "react";
import AdaptivePanel from "../AdaptivePanel/AdaptivePanel";
import Button from "../DialogButton/DialogButton";

type NovaTarefaButtonProps = Readonly<{
  onAdd: (e: string) => void;
}>;

export default function NovaTarefaButton({ onAdd }: NovaTarefaButtonProps) {
  const [name, setName] = useState("");
  return (
    <AdaptivePanel
      trigger={
        <Button
          onClick={() => {}}
          text="Adicionar nova tarefa"
          className="primaryButton"
        />
      }
      title={
        <p className="text-[length:--titleSize] font-medium h-fit">
          Nova tarefa
        </p>
      }
      description={
        <div className="flex flex-col">
          <label
            htmlFor="titulo"
            className="text-[length:--textSize] text-[--foreground] w-full font-[--normalWeight] select-none"
          >
            Título
          </label>
          <input
            id="titulo"
            name="titulo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-4 rounded-[8px] border-[#D7DDE9] border-[1px] w-full text-[--secondary] text-[length:--textSize] font-[--normalWeight] h-fit focus:outline-none focus-visible:outline-none "
            type="text"
            placeholder="Digite"
          />
        </div>
      }
      footer={
        <div className="flex flex-col-reverse sm:flex-row gap-4">
          <Button
            onClick={() => {}}
            text="Cancelar"
            className="secondaryButton"
          />
          <Button
            onClick={() => onAdd(name)}
            text="Adicionar"
            className="primaryButton"
          />
        </div>
      }
    />
  );
}
