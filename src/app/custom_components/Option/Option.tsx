import Checkmark from "../Checkbox/Checkbox";

type OptionProps = Readonly<{
  text: string;
  checked: boolean;
  setChecked: (e: boolean) => void;
  deleteComponent: React.ReactNode;
}>;

export default function Option({
  text,
  checked,
  setChecked,
  deleteComponent,
}: OptionProps) {
  return (
    <div className="flex flex-row justify-between items-center gap-4 dashedBorder p-4 w-full max-w-[450px] hover:cursor-pointer hover:bg-none">
      <Checkmark onChange={setChecked} checked={checked} />
      <p
        className={`text-[length:--textSize] w-full font-[--normalWeight] text-wrap break-all select-none ${
          checked ? "line-through text-[--secondary]" : ""
        } `}
      >
        {text}
      </p>

      {deleteComponent}
    </div>
  );
}
