import * as React from "react";
import { Button } from "@atoms/Button";
import { Input } from "@atoms/Input";
import { cn } from "@theme/utils";
import { Search } from "lucide-react";

export interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar = React.forwardRef<HTMLDivElement, SearchBarProps>(
  ({ onSearch, placeholder = "Search...", className }, ref) => {
    const [query, setQuery] = React.useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSearch?.(query);
    };

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className={cn("flex w-full max-w-sm items-center space-x-2", className)}
      >
        <Input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </form>
    );
  }
);
SearchBar.displayName = "SearchBar";

export { SearchBar };

