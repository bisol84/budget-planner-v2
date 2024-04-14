import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/button";

export default function ModifyButton() {
  return (
    <Button variant="outline">
      <FontAwesomeIcon icon={faPenToSquare} className="cursor-pointer" />
    </Button>
  );
}
