import { useEffect, useState } from "react";
import ComponentCard from "../../common/ComponentCard.tsx";
import Label from "../Label.tsx";
import Input from "../input/InputField.tsx";
import axios from "axios";
import { toast } from "react-toastify";

export default function TestimonialEditForm({setEditUserPopup, type, data} : {setEditUserPopup:any, type:string, data:any}) {
    
    const [addData , setAddData] = useState({
      name: "",
      work: "",
      comment: ""
    })

    const [adId , setAdId] = useState()

    useEffect(() => {

      if (data) {
        setAddData({
          name: data.name,
          work: data.work,
          comment: data.comment
        });
        setAdId(data._id)
      }
    }, [data]); 

    const handleAddReview = async (e:any , _id:any)=> {

      e.preventDefault();

      try {

        if(type == 'add') {
          const token = sessionStorage.getItem("authToken");
          const response = await axios.post("http://localhost:3000/auth/testimonial_save" , addData , {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          });        

          if(response?.data?.status == true) {
            setEditUserPopup(false)
            toast.success("Review Added");
          }

        } 
        
        if(type == "edit") {
          const token = sessionStorage.getItem("authToken");
          const response = await axios.put(`http://localhost:3000/auth/testimonial_update/${adId}` , addData , {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          });
          
          if(response?.data?.status == true) {
            setEditUserPopup(false)
            toast.success("Review Updated");
          }
          
        }

        setAddData({
          name: "",
          work: "",
          comment: ""
        })

      } catch(error) {
        console.log("Update and Edit Error:->", error);
      }

    }

  return (
    <ComponentCard title={`${type == "add"? "Add Review": "Edit Review"}`} className="relative" >
      <div className="space-y-6">
        <div>
          <Label>Name</Label>
          <Input type="text" value={addData?.name} onChange={(e)=>setAddData((prev)=>({...prev , name: e.target.value}))} />
        </div>
        <div>
          <Label>Work</Label>
          <Input type="text" value={addData?.work} onChange={(e)=>setAddData((prev)=>({...prev , work: e.target.value}))} />
        </div>
        <div>
          <Label>Comment</Label>
          <Input type="text" value={addData?.comment} onChange={(e)=>setAddData((prev)=>({...prev , comment: e.target.value}))} />
        </div>
        <div className="flex justify-center">
          <button onClick={(e)=>handleAddReview(e , adId)} type="submit" className="border border-blue-600 rounded-md px-6 py-1 text-blue-600 font-semibold hover:bg-blue-200 hover:text-blue-800 hover:border-blue-800">
            {`${type == "add"? "Add": "Update"}`}
          </button>
        </div>
      </div>
      <div onClick={()=>setEditUserPopup(false)} className="absolute top-[5%] right-[4%] cursor-pointer text-[18px] font-semibold text-gray-500">
        X
      </div>
    </ComponentCard>
  );
}