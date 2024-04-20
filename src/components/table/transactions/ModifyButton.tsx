import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function ModifyButton() {
  return (
    <Button variant="outline">
      <FontAwesomeIcon icon={faPenToSquare} />
    </Button>
  );
}
