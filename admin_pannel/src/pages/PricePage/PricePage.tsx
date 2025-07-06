import { useCallback, useEffect, useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Input from "../../components/form/input/InputField";
import Label from "../../components/form/Label";
import axios from "axios";
import { toast } from "react-toastify";

export default function PricePage() {

  const [ previewImage , setPreviewImage ] = useState<string | null>(null);

  const [ formData , setFormData ] = useState<any>({
    heading: "",
    subHeading: "",
    image: ""
  })

  const handleShow = useCallback(async()=>{

    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.get("http://localhost:3000/auth/price_read" , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })

      if(response?.data?.status == true) {
        setFormData(response?.data?.data)
      }

    } catch(error) {
      console.log("handleShowError:->" , error)
    }

  }, [])

  const handleSubmit = async (e:any , _id:any)=>{

    e.preventDefault()

    try {

      const submitForm = new FormData();
      submitForm.append("heading" , formData.heading);
      submitForm.append("subHeading" , formData.subHeading);
      submitForm.append("image" , formData.image);

      const token = sessionStorage.getItem("authToken");

      const response = await axios.put(`http://localhost:3000/auth/price_update/${_id}` , submitForm , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })

      if(response?.data?.status == true){
        handleShow()
        toast.success("Data updated");
      }

    } catch(error) {
      console.log("handleSubmitError:->" , error)
    }

  }

  useEffect(()=>{
    handleShow()
  }, [handleShow])

  return (
    <div>
      <PageMeta
        title="React.js Blank Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Price Page" />
      <div className=" rounded-2xl border border-gray-200 bg-white  dark:border-gray-800 dark:bg-white/[0.03] p-5">

        {/* Header */}

        <div className="">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Header
          </h3>
          <form>
            <div className="mb-4 flex items-center gap-5">            
              <img src={ previewImage || formData?.image } className="object-cover h-[120px] w-[200px]" />
              <input type="file" name="image"
                onChange={(e)=>{const file = e.target?.files?.[0];
                  if(file){
                    setFormData({...formData , image:file});
                    setPreviewImage(URL.createObjectURL(file));
                  }
                }}        
                className="focus:border-ring-brand-300 h-11 w-[40%] overflow-hidden rounded-lg border border-gray-300 bg-transparent text-sm text-gray-500 shadow-theme-xs transition-colors file:mr-2 file:border-collapse file:cursor-pointer file:rounded-l-lg file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-50 file:py-3 file:pl-3.5 file:pr-3 file:text-sm file:text-gray-700 placeholder:text-gray-400 hover:file:bg-gray-100 focus:outline-hidden focus:file:ring-brand-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:file:border-gray-800 dark:file:bg-white/[0.03] dark:file:text-gray-400 dark:placeholder:text-gray-400" />
            </div>
            <div className="">
              <div className="flex justify-between mb-4">
                <div className=" w-[49%]">
                  <Label>Heading</Label>   
                  <Input onChange={(e)=>setFormData({...formData , heading: e.target.value})} value={formData?.heading} type="text"  />
                </div>
                <div className="w-[49%]">
                  <Label>Sub - Heading</Label>
                  <Input onChange={(e)=>setFormData({...formData , subHeading: e.target.value})} value={formData?.subHeading} type="text" />
                </div>
              </div>
              <div className="flex justify-end mt-5">
                <button onClick={(e)=>handleSubmit(e , formData?._id)} type="submit" className="border border-blue-600 rounded-md px-10 py-1.5 text-blue-600 font-semibold hover:bg-blue-200 hover:text-blue-800 hover:border-blue-800">
                  Save All Info.
                </button>
              </div>
            </div>
            
          </form> 
        </div>

      </div>
    </div>
  );
}
