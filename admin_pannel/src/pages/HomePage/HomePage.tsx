import { useCallback, useEffect, useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Input from "../../components/form/input/InputField";
import Label from "../../components/form/Label";
import axios from "axios";
import { toast } from "react-toastify";



export default function HomePage() {

  let image = "";

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  
  const [detailsShow, setDetailShow] = useState<any>({
    image: "",
    heading: "",
    subHeading: "",
    subSubHeading: "",
    text: "",
    button: {
      name: "",
      url: ""
    }
  });

  const handleShowDetails = useCallback(async() => {
    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.get("http://localhost:3000/auth/hero_read" , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      if(response?.data?.status == true) {
        setDetailShow(response?.data?.data);
        image = response?.data?.data?.image
      }
    } catch(error) {
      console.log("handleShowDetailsError:=>" , error);
    }
  } , [])

  const handleChangeDetails = async (e: any, _id: any) => {
    
  e.preventDefault();

  try {
    const formData = new FormData();
    formData.append("image", detailsShow.image); 
    formData.append("heading", detailsShow.heading);
    formData.append("subHeading", detailsShow.subHeading);
    formData.append("subSubHeading", detailsShow.subSubHeading);
    formData.append("text", detailsShow.text);
    formData.append("button[name]", detailsShow.button.name);
    formData.append("button[url]", detailsShow.button.url);

    const token = sessionStorage.getItem("authToken");
    const response = await axios.put(
      `http://localhost:3000/auth/hero_update/${_id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
        },
      }
    );

    if (response?.data?.status === true) {
      handleShowDetails()
      toast.success("Data Updated");
    }
    
  } catch (error) {
    console.log("handleChangeDetailsError:->", error);
  }
};

  useEffect(()=>{
    handleShowDetails()
  } , [handleShowDetails])

  return (
    <div>
      <PageMeta
        title="React.js Blank Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Home Page" />
      <div className=" rounded-2xl border border-gray-200 bg-white  dark:border-gray-800 dark:bg-white/[0.03] p-5">

        {/* Header */}

        <div className="">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Header
          </h3>
          <form>
            <div className="mb-4 flex items-center gap-5">            
              <img src={previewImage || detailsShow.image} className="object-cover h-[120px] w-[200px]" />
              <input type="file" name="image"
              onChange={(e) => {const file = e.target?.files?.[0];
              if (file) {
                setDetailShow({ ...detailsShow, image: file });
                setPreviewImage(URL.createObjectURL(file));
              }}}
            className="focus:border-ring-brand-300 h-11 w-[40%] overflow-hidden rounded-lg border border-gray-300 bg-transparent text-sm text-gray-500 shadow-theme-xs transition-colors file:mr-2 file:border-collapse file:cursor-pointer file:rounded-l-lg file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-50 file:py-3 file:pl-3.5 file:pr-3 file:text-sm file:text-gray-700 placeholder:text-gray-400 hover:file:bg-gray-100 focus:outline-hidden focus:file:ring-brand-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:file:border-gray-800 dark:file:bg-white/[0.03] dark:file:text-gray-400 dark:placeholder:text-gray-400" />
            </div>
            <div className="">
              <div className="flex justify-between mb-4">
                <div className=" w-[49%]">
                  <Label>Heading</Label>   
                  <Input 
                    value={detailsShow?.heading} 
                    onChange={(e) => setDetailShow({ ...detailsShow, heading: e.target.value })} 
                    type="text"  />
                </div>
                <div className="w-[49%]">
                  <Label>Sub - Heading</Label>
                  <Input onChange={(e) => setDetailShow({ ...detailsShow, subHeading: e.target.value })}  value={detailsShow?.subHeading}  type="text" />
                </div>
              </div>
              <div className="flex justify-between">
                <div className=" w-[49%]">
                  <Label>Sub - Sub Heading</Label>
                  <Input onChange={(e) => setDetailShow({ ...detailsShow, subSubHeading: e.target.value })} value={detailsShow?.subSubHeading}  type="text" />
                </div>
                <div className=" w-[49%]">
                  <Label>Text</Label>
                  <Input onChange={(e) => setDetailShow({ ...detailsShow, text: e.target.value })} value={detailsShow?.text}  type="text" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center gap-5">
                <Label>Button:</Label>
                <Input onChange={(e) => setDetailShow((prev:any) => ({...prev, button: {...prev.button, ['name']: e.target.value,}}))} type="text" value={detailsShow?.button?.name} placeholder="Button Name" />
                <Input onChange={(e) => setDetailShow((prev:any) => ({...prev, button: {...prev.button, ['url']: e.target.value,}}))} type="text" value={detailsShow?.button?.url} placeholder="Button URL" />
              </div>
              <button onClick={(e) => handleChangeDetails(e, detailsShow?._id)} className="border border-blue-600 rounded-md px-10 py-1.5 text-blue-600 font-semibold hover:bg-blue-200 hover:text-blue-800 hover:border-blue-800">
                Save All Info.
              </button>
            </div>
          </form> 
        </div>

      </div>
    </div>
  );
}
