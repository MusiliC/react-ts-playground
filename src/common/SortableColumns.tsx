import { Button } from "@/components/ui/button";
import { Column } from "@tanstack/react-table";
import { ArrowUpDownIcon } from "lucide-react";

type SortableColumnsProps<T> = {
  column: Column<T, unknown>;
  label: string;
};

function SortableColumns<T>({ column, label }: SortableColumnsProps<T>) {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {label}
      <ArrowUpDownIcon className="ml-2 h-4 w-4" />
    </Button>
  );
};

export default SortableColumns;
