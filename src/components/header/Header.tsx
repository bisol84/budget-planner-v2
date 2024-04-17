import RootMenu from "@/components/header/RootMenu";
import Logo from "@/components/header/Logo";

export default function Header() {
  return (
    <nav className="flex p-4 items-center w-full gap-2 justify-between">
      <Logo className="font-bold text-sm md:text-lg" />
      <RootMenu className="justify-center" />
    </nav>
  );
}
