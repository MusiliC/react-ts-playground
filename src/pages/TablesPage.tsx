import { commentsData } from "@/features/my-table/comments-data";
import { commentsColumns } from "@/features/my-table/CommentsColumn";
import CommentsTable from "@/features/my-table/CommentsTable";
import { columns } from "@/features/tables/Columns";
import { DataTable } from "@/features/tables/DataTable";
import { payments } from "@/features/tables/PaymentsData";


function TablesPage() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={payments} />
      <CommentsTable columns={commentsColumns} data={commentsData} />
    </div>
  );
}

export default TablesPage