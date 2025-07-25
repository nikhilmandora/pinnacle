import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import TowerPlansTable from "../../components/tables/TowerPlansTable/TowerPlansTable";


export default function TowerPlans() {

  return (
    
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Tower Plans" />
      <div className="space-y-6">
        <ComponentCard title="Tower Plans">
          <TowerPlansTable />
        </ComponentCard>
      </div>
    </>
  );
}
