import Image from "next/image";
import { Button } from "../ui/button.tsx";
import { MenuIcon } from "lucide-react";
const Header = () => {
  return (
    <div className="flex justify-between px-5 pt-6">
      <Image src="/logo.png" alt="logo" width={100} height={30} />
      <Button
        size="icon"
        variant="outline"
        className="border-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
