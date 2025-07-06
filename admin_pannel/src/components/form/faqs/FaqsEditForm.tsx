import axios from "axios";
import ComponentCard from "../../common/ComponentCard.tsx";
import Label from "../Label.tsx";
import Input from "../input/InputField.tsx";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function FaqsEditForm({setFormPopUp , type , data}:{setFormPopUp:any , type:string , data:any}) {

  const [formData , setFormData] = useState({
    ques: "",
    ans: ""
  })

  const [forID , setForID] = useState()

  useEffect(()=>{

    if(data){
      setFormData({
        ques: data.ques, 
        ans: data.ans
      })
      setForID(data._id);
    }
  } , [data] );
    
  const handleSubmit = async (e:any , forID:any) => {

    e.preventDefault();

    try {

      if(type == "add") {
        const token = sessionStorage.getItem("authToken");
        const responseAdd = await axios.post("http://localhost:3000/auth/faq_create" , formData , {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });

        if(responseAdd?.data?.status == true) {
          setFormPopUp(false)
          toast.success("FAQ Added Succesfully");
        }

      }

      if(type == "edit") {
        const token = sessionStorage.getItem("authToken");
        const responseEdit = await axios.put(`http://localhost:3000/auth/faq_update/${forID}` , formData , {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        })

        if(responseEdit?.data?.status == true) {
          setFormPopUp(false)
          toast.success("FAQ Updated Succesfully");
        }

      }

      setFormData({
        ques: "",
        ans: ""
      })

    } catch(error) {  
      console.log("Submit Handle :=>" , error);
    }

  }

  return (
    <ComponentCard title={`${ type == "add" ? "Add" : "Edit" } FAQ `} className="relative">
      <div className="space-y-6">
        <div>
          <Label>Question</Label>
          <Input value={formData?.ques} onChange={(e)=>setFormData((prev)=>({...prev , ques: e.target.value}))} type="text" />
        </div>
        <div>
          <Label>Answer</Label>
          <Input value={formData?.ans} onChange={(e)=>setFormData((prev)=>({...prev , ans: e.target.value}))} type="text" />
        </div>
        <div className="flex justify-center">
          <button onClick={(e)=>handleSubmit(e , forID)} type="submit" className="border border-blue-600 rounded-md px-6 py-1 text-blue-600 font-semibold hover:bg-blue-200 hover:text-blue-800 hover:border-blue-800">
            {`${ type == "add" ? "Add" : "Update" }`}
          </button>
        </div>
      </div>
      <div onClick={()=>setFormPopUp(false)} className="absolute top-[5%] right-[4%] cursor-pointer text-[18px] font-semibold text-gray-500">
        X
      </div>
    </ComponentCard>
  );
}