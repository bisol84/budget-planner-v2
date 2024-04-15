import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/button";

export default function AddButton() {
  return (
    <Button variant="outline">
      <FontAwesomeIcon icon={faPlus} className="cursor-pointer" />
    </Button>
  );
}
