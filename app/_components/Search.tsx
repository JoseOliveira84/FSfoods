import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";
const Search = () => {
  return (
    <div className="flex gap-5">
      <Input placeholder="Procurar por comida ou restaurantes" />
      <Button size="icon">
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
