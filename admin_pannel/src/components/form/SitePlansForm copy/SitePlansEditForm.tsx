import { useEffect, useState } from "react";
import ComponentCard from "../../common/ComponentCard.tsx";
import Label from "../Label.tsx";
import Input from "../input/InputField.tsx";
import axios from "axios";
import { toast } from "react-toastify";

export default function SitePlansEditForm({setFormPopUp, type, dataForId} : {setFormPopUp:any, type:any, dataForId:any}) {

  const [ error , setError ] = useState(false);

  const [ formData , setFormData ] = useState({
    entry: ""
  })

  const [ forId , setForId ] = useState()

  const handleSubmit = async (e:any , forId:any)=> {

    e.preventDefault()

    if(!formData?.entry){
      setError(true)
      return;
    }

    try {

      if(type == "add") {
        const token = sessionStorage.getItem("authToken");
        const response = await axios.post("http://localhost:3000/auth/site_plans_create" , formData , {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        })

        if(response?.data?.status == true){
          setFormPopUp(false);
          toast.success("Entry Added");
        }

      }

      if(type == "edit") {
        const token = sessionStorage.getItem("authToken");
        const response = await axios.put(`http://localhost:3000/auth/site_plans_update/${forId}` , formData , {
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
        entry: ""
      })

    } catch(error) {
      console.log("handleSubmitError:->" , error)
    }

  }

  useEffect(()=>{
    if(dataForId){
      setFormData({
        entry: dataForId?.entry
      })
    }
    setForId(dataForId?._id)
  }, [dataForId])

  useEffect(()=>{
    if(error){
      const timer = setTimeout(()=>{
        setError(false)
      }, 2000)
      return ()=> clearTimeout(timer)
    }
  }, [error])

  return (
    <ComponentCard title={`${type == "add" ? "Add" : "Edit"} Site Plans`} className="relative">
      <div className="space-y-2">
        <div>
          <Label>Site Plan</Label>
          <Input onChange={(e)=>setFormData((prev:any)=>({...prev , entry: e.target.value}))} value={formData?.entry} type="text" />
          <div className={`${error == true ? "" : "opacity-0"} font-light text-red-600 text-[12px] `}>
            Please Fill Fields.
          </div>
        </div>
        <div className="flex justify-center">
          <button onClick={(e)=>handleSubmit(e , forId)} type="submit" className="border border-blue-600 rounded-md px-6 py-1 text-blue-600 font-semibold hover:bg-blue-200 hover:text-blue-800 hover:border-blue-800">
            {type == "add" ? "Add" : "Update"}
          </button>
        </div>
      </div>
      <div onClick={()=>setFormPopUp(false)} className="absolute top-[5%] right-[4%] cursor-pointer text-[18px] font-semibold text-gray-500">
        X
      </div>
    </ComponentCard>
  );
}