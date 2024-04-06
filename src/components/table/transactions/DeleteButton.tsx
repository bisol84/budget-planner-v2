import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function DeleteButton() {
  return (
    <Button variant="outline">
      <FontAwesomeIcon icon={faTrash} />
    </Button>
  );
}
