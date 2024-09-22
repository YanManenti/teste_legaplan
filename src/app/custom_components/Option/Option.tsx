import { Trash } from "lucide-react";
import Checkmark from "../Checkbox/Checkbox";

type OptionProps = Readonly<{
  text: string;
  onFinish: () => void;
  onDelete: () => void;
}>;

export default function Option({ text, onFinish, onDelete }: OptionProps) {
  return (
    <div className="flex flex-row justify-between items-center gap-4 dashedBorder py-4 px-4 min-w-[450px] hover:cursor-pointer hover:bg-none">
      <Checkmark onChange={onFinish} />
      <p className="text-[length:--textSize] w-full font-[--normalWeight]">
        {text}
      </p>
      <Trash
        color="#B0BBD1"
        onClick={onDelete}
        className="hover:stroke-[#d30707] hover:cursor-pointer right-0"
      />
    </div>
  );
}
