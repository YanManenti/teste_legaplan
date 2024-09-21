import { Trash } from "lucide-react";

type OptionProps = Readonly<{
  text: string;
  onFinish: () => void;
  onDelete: () => void;
}>;

export default function Option({ text, onFinish, onDelete }: OptionProps) {
  return (
    <div className="flex flex-row justify-between items-center border-dashed border-gray-400 border-[1px] py-4 px-4 min-w-[450px]">
      <input
        type="checkbox"
        className="h-6 w-6 border-[2px] border-[#D7DDE9] rounded-[4px]"
        onClick={onFinish}
      />
      <p className="text-[length:--textSize]">{text}</p>
      <Trash color="#B0BBD1" onClick={onDelete} />
    </div>
  );
}
