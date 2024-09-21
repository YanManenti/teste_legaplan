type ButtonProps = Readonly<{
  text: string;
  onClick: () => void;
  className?: string;
}>;

export default function Button({ text, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-4 rounded-lg h-fit w-fit min-w-[450px] ${className}`}
    >
      {text}
    </button>
  );
}
