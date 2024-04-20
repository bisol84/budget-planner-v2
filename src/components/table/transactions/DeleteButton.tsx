import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function DeleteButton({ onClick }) {
  return (
    <Button variant="outline" onClick={onClick}>
      <FontAwesomeIcon icon={faTrash} />
    </Button>
  );
}
