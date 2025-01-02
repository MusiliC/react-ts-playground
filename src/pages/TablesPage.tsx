import { columns } from "@/features/tables/Columns";
import { DataTable } from "@/features/tables/DataTable";
import { payments } from "@/features/tables/PaymentsData";


function TablesPage() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={payments} />
    </div>
  );
}

export default TablesPage