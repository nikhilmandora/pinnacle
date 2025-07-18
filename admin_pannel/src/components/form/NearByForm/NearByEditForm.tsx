import { useEffect, useState } from "react";
import ComponentCard from "../../common/ComponentCard.tsx";
import Label from "../Label.tsx";
import Input from "../input/InputField.tsx";
import { toast } from "react-toastify";
import axios from "axios";

export default function NearByEditForm({setFormPopUp , type , dataForId} : {setFormPopUp:any , type:any , dataForId:any}) {

  const [ error , setError ] = useState(false);

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [ formData , setFormData] = useState<any>({
    heading: "",
    km: "",
    image: null
  })

  const [forId , setForID] = useState()

  let imgPath = "http://localhost:3000/assets/nearby/"
  
  const handleSubmit = async (e:any , forId:any)=> {

    e.preventDefault()

    if(!formData.heading || !formData.km || (type == "add" && !formData.image)){
      setError(true);
      return;
    }

    try {

      const submitForm = new FormData();
      submitForm.append("heading" , formData.heading);
      submitForm.append("km" , formData.km);
      if(formData.image){
        submitForm.append("image" , formData.image);
      }

      if(type == "add") {
        const token = sessionStorage.getItem("authToken");
        const response = await axios.post("http://localhost:3000/auth/nearby_create" , submitForm , {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        })

        if(response?.data?.status == true) {
          setFormPopUp(false);
          toast.success("Data Added");
        }

      }

      if(type == "edit") {
        const token = sessionStorage.getItem("authToken");
        const response = await axios.put(`http://localhost:3000/auth/nearby_update/${forId}` , submitForm , {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        })

        if(response?.data?.status == true){
          setFormPopUp(false);
          toast.success("Data Updated");
        }

      }

      setFormData({
        heading: "",
        km: "",
        image: null
      })      

    } catch (error) {
      toast.error("Data Not Send")
    }

  }

  useEffect(()=>{
    if(dataForId){
      setFormData({
        heading: dataForId.heading,
        km: dataForId.km,
        image: dataForId.image
      })
    }
    setForID(dataForId._id)
  }, [dataForId])

  useEffect(()=>{
    if(error){
      const timer = setTimeout(() => {
        setError(false)
      }, 2000);

      return () => clearTimeout(timer)
    }
  } , [error])

  return (
    <ComponentCard title={`${type == "add" ? "Add" : "Edit" } NearBy`} className="relative">
      <div className="space-y-2">
        <div>
          <Label>Heading</Label>
          <Input type="text" onChange={(e)=>setFormData((prev:any)=>({...prev , heading: e.target.value}))} value={formData.heading} />
          <div className={`${error == true ? "" : "opacity-0" } font-light text-red-600 text-[12px] `}>
            Please Fill Fields.
          </div>
        </div>
        <div>
          <Label>KMs</Label>
          <Input  type="text" onChange={(e)=>setFormData((prev:any)=>({...prev , km: e.target.value}))} value={formData.km} />
          <div className={`${error == true ? "" : "opacity-0" } font-light text-red-600 text-[12px] `}>
            Please Fill Fields.
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
          <img src={imagePreview ? imagePreview : type == "edit"? `${imgPath}${dataForId.image}`: "/images/chat/chat.jpg"} className="bg-cover h-[120px] w-[200px]" />
            <div className={`${error == true ? "" : "opacity-0" } font-light text-red-600 text-[12px]`}>
              Please Upload Image.
            </div>
          </div>
          <input onChange={(e) => {const file = e.target.files?.[0];
              if (file) {
                setFormData((prev: any) => ({ ...prev, image: file }));
                setImagePreview(URL.createObjectURL(file));
              }
            }} type="file" name="image" className="focus:border-ring-brand-300 h-11 w-[55%] overflow-hidden rounded-lg border border-gray-300 bg-transparent text-sm text-gray-500 shadow-theme-xs transition-colors file:mr-2 file:border-collapse file:cursor-pointer file:rounded-l-lg file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-50 file:py-3 file:pl-3.5 file:pr-3 file:text-sm file:text-gray-700 placeholder:text-gray-400 hover:file:bg-gray-100 focus:outline-hidden focus:file:ring-brand-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:file:border-gray-800 dark:file:bg-white/[0.03] dark:file:text-gray-400 dark:placeholder:text-gray-400" />
        </div>
        <div className="flex justify-center">
          <button onClick={(e)=>handleSubmit(e , forId)} type="submit" className="border border-blue-600 rounded-md px-6 py-1 text-blue-600 font-semibold hover:bg-blue-200 hover:text-blue-800 hover:border-blue-800">
            {type == "add" ? "Add" : "Update" }
          </button>
        </div>
      </div>
      <div onClick={()=>setFormPopUp(false)} className="absolute top-[5%] right-[4%] cursor-pointer text-[18px] font-semibold text-gray-500">
        X
      </div>
    </ComponentCard>
  );
}