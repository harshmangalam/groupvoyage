import { Logo } from "../logo";

export function Navbar() {
  return (
    <nav className="border-b sticky top-0 bg-background z-10">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Logo />
        </div>
      </div>
    </nav>
  );
}
