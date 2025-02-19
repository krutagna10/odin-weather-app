import { ModeToggle } from "./mode-toggle";

function Header() {
  return (
    <header className="flex justify-between">
      <h1 className="text-2xl">Odin Weather</h1>
      <ModeToggle />
    </header>
  );
}

export default Header;
