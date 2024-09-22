type DialogButtonProps = Readonly<{
  text: string;
  onClick: () => void;
  className?: string;
}>;

export default function DialogButton({
  text,
  onClick,
  className,
}: DialogButtonProps) {
  return (
    <p
      onClick={onClick}
      className={`px-6 py-4 rounded-lg h-fit w-full max-w-[450px] text-center cursor-pointer ${className}`}
    >
      {text}
    </p>
  );
}
