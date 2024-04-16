import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface DeleteButtonProps {
  onClick: () => void;
}

export default function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <Button variant="outline" onClick={onClick}>
      <FontAwesomeIcon icon={faTrash} className="cursor-pointer" />
    </Button>
  );
}
