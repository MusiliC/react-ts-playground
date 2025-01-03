import SortableColumns from "@/common/SortableColumns";
import { Button } from "@/components/ui/button";
import { CommentsType } from "@/types/CommentsType";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDownIcon } from "lucide-react";

export const commentsColumns: ColumnDef<CommentsType>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },

  {
    accessorKey: "email",
    // todo -> making only one column sortable
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: (info) => (
      <span className="font-bold italic text-blue-500">
        {info.getValue() as string}
      </span>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => <SortableColumns column={column} label="Name" />,
  },
  {
    accessorKey: "postId",
    header: "Post Id",
  },
  {
    accessorKey: "body",
    header: "Body",
  },
];

// const columnHelper = createColumnHelper<CommentsType>();

// export const commentsColumns= [
//   columnHelper.accessor("id", {
//     header: "Id",
//   }),
//   columnHelper.accessor("name", {
//     header: "Name",
//   }),
//   columnHelper.accessor("email", {
//     header: "Email",
//   }),
//   columnHelper.accessor("postId", {
//     header: "Post Id",
//   }),
//   columnHelper.accessor("body", {
//     header: "Body",
//   }),
// ];
