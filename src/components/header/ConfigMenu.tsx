import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Button } from "@/components/ui/button";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = true;

export default function ConfigMenu() {
  return (
    <div>
      <Button size="icon">
        <FontAwesomeIcon icon={faGear} />
      </Button>
    </div>
  );
}
