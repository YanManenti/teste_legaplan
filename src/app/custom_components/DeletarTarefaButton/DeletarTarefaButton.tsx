import AdaptivePanel from "../AdaptivePanel/AdaptivePanel";
import Button from "../DialogButton/DialogButton";
import { Trash } from "lucide-react";

type DeletarTarefaButtonProps = Readonly<{
  id: string;
  onDelete: (e: string) => void;
}>;

export default function DeletarTarefaButton({
  id,
  onDelete,
}: DeletarTarefaButtonProps) {
  return (
    <AdaptivePanel
      trigger={
        <Trash
          color="#B0BBD1"
          className="hover:stroke-[#d30707] hover:cursor-pointer right-0 min-w-6"
        />
      }
      title={
        <p className="text-[length:--titleSize] font-medium h-fit">
          Deletar tarefa
        </p>
      }
      description={
        <p className="text-[--secondary] text-[length:--textSize] font-[--normalWeight] h-fit">
          Tem certeza que você deseja deletar essa tarefa?
        </p>
      }
      footer={
        <div className="flex flex-col-reverse sm:flex-row gap-4">
          <Button
            onClick={() => {}}
            text="Cancelar"
            className="secondaryButton"
          />
          <Button
            onClick={() => onDelete(id)}
            text="Deletar"
            className="errorButton"
          />
        </div>
      }
    />
  );
}
