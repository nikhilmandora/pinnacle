import { useEffect, useState } from "react";
import ComponentCard from "../../common/ComponentCard.tsx";
import Label from "../Label.tsx";
import Input from "../input/InputField.tsx";
import axios from "axios";
import { toast } from "react-toastify";

export default function UserEditForm({setEditUserPopup , handleUserData, userDetail } : {setEditUserPopup:any , handleUserData:any, userDetail:any}) {
  
  const [initailData , setInitailData] = useState({
    name: "",
    email: "",
    role: "",
    password: ""
  });

useEffect(()=>{
  setInitailData({
    name: userDetail?.name,
    email: userDetail?.email,
    role: userDetail?.role,
    password: ''
  })
}, [userDetail])


  const handleSubmitFrom = async (_id:any) => {

    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.put(`http://localhost:3000/auth/edit_details/${_id}`, initailData , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      if(response?.data?.status == true){
        toast.success("New Data Save")
        handleUserData()
        setEditUserPopup(false)
      }

    } catch(error) {
      toast.error("Can't Submit Empty Fields")
    }

  }

  return (
    <ComponentCard title="User Edit Form">
      <div className="space-y-6">
        <div>
          <Label>Name</Label>
          <Input type="text" value={initailData?.name || '-'} onChange={(e)=>setInitailData((prev)=>({...prev , name:e.target.value}))} />
        </div>
        <div>
          <Label>Email</Label>
          <Input type="email" value={initailData?.email || '-'} onChange={(e)=>setInitailData((prev)=>({...prev , email:e.target.value}))} />
        </div>
        <div className="flex justify-between">
          <Label htmlFor="role">Role</Label>
          <select id="role" value={initailData?.role} onChange={(e) =>setInitailData((prev) => ({...prev, role: e.target.value}))} >
            <option value="-">Select Role</option>
            <option value="admin">admin</option>
            <option value="customer">customer</option>
          </select>
        </div>
        <div>
          <Label>Password</Label>
          <Input type="password" onChange={(e)=>setInitailData((prev)=>({...prev , password:e.target.value}))} />
        </div>
        <div className="flex justify-center">
          <button onClick={()=>handleSubmitFrom(userDetail?._id)} className="border border-blue-600 rounded-md px-6 py-1 text-blue-600 font-semibold hover:bg-blue-200 hover:text-blue-800 hover:border-blue-800">
            Submit
          </button>
        </div>
      </div>
      <div onClick={()=>setEditUserPopup(false)} className="absolute top-[14%] left-[72%] cursor-pointer text-[18px] font-semibold text-gray-500">
        X
      </div>
    </ComponentCard>
  );
}
