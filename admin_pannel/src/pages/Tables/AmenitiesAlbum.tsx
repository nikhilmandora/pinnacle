import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import AmenitiesAlbumTable from "../../components/tables/AmenitiesAlbumTables/AmenitiesAlbumTable";


export default function AmenitiesAlbum() {

  return (
    
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Amenities Album" />
      <div className="space-y-6">
        <ComponentCard title="Amenities Album">
          <AmenitiesAlbumTable />
        </ComponentCard>
      </div>
    </>
  );
}
