import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function UploadButton() {
  return (
    <Button variant="outline">
      <FontAwesomeIcon icon={faCloudArrowUp} />
    </Button>
  );
}
