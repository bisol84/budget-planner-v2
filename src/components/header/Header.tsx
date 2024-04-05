import RootMenu from "@/components/header/RootMenu";
import Logo from "@/components/header/Logo";
import ConfigMenu from "@/components/header/ConfigMenu";
import { ModeToggle } from "./ThemeChanger";

export default function Header() {
  return (
    <nav className="flex p-4 items-center">
      <div className="font-bold text-lg">
        <Logo />
      </div>
      <div className="m-auto justify-center">
        <RootMenu />
      </div>
      <div>
        <ModeToggle />
      </div>
      <div>
        <ConfigMenu />
      </div>
    </nav>
  );
}
