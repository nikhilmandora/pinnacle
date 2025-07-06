import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import editButton from "/images/myImages/pen.png"
import deleteButton from "/images/myImages/bin.png"
import TowerPlansEditForm from "../../form/TowerPlansForm/TowerPlansEditForm";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Switch from "../../form/switch/Switch";

export default function TowerPlansTable() {

  const [ childRef , setComponentKey ] = useState(0);

  const [ formPopUp , setFormPopUp ] = useState(false);

  const [ type , setType ] = useState("");

  const [ formData , setFormData ] = useState<any>([]);

  let initData = {
    button: "",
    image: null
  }

  const [ dataForId , setDataForId ] = useState(initData);

  const handleShowData = useCallback(async()=>{

    try{
      const token = sessionStorage.getItem("authToken");
      const response = await axios.get("http://localhost:3000/auth/tower_plans_read" , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      if(response?.data?.status == true){
        setFormData(response?.data?.data);
      }

    } catch(error){
      console.log("handleShowDataError:->" , error);
    }

  }, [])

  const handleDelete = async ( _id:any )=> {

    try{
      const token = sessionStorage.getItem("authToken");
      const response = await axios.delete(`http://localhost:3000/auth/tower_plans_delete/${_id}` , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })

      if(response?.data?.status == true){
        handleShowData();
        toast.success("Delete Successfully");
      }

    } catch(error){
      console.log("handleDeleteError:->" , error)
    }

  }

  const handleUpdateStatus = async ( _id:any , status:boolean )=> {

    try{
      const token = sessionStorage.getItem("authToken");
      const response = await axios.put(`http://localhost:3000/auth/tower_plans_update_status/${_id}` , {status: !status} , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })

      if(response?.data?.status == true){
        handleShowData();
        toast.success("Status Updated");
      }

    } catch(error){
      console.log("handleUpdateStatusError:->" , error);
    }

  }

  useEffect(()=>{
    handleShowData()
  }, [handleShowData , formPopUp])

  const handleEdit = async (showData:any)=>{
    setComponentKey(Math.random())
    setFormPopUp(true);
    setType("edit");
    setDataForId(showData)
  }

  const handleAdd = async ()=>{
    setComponentKey(Math.random());
    setFormPopUp(true); 
    setType("add");
    setDataForId(initData);
  }

  return (

    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400" >
                S No.
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400" >
                Button Name
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400" >
                Image
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400" >
                Status
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400" >
                Change
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {formData?.map((showData:any , index:any)=>(
              <TableRow key={index}>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {index < 9 ? "0" : ""}{index + 1}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {showData?.button}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                 <img src={showData?.image} className="bg-cover h-[120px] w-[200px]" />  
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  <div className="flex -space-x-2">
                  <Switch label="" defaultChecked={showData?.status} onChange={()=>handleUpdateStatus(showData?._id , showData?.status)}/>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-evenly">
                    <img onClick={()=>handleEdit(showData)} src={editButton} className="h-[22px] cursor-pointer" />
                    <img onClick={()=>handleDelete(showData?._id)} src={deleteButton} className="h-[22px] cursor-pointer" />
                  </div>
                </TableCell>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      <div className={`${formPopUp == true ? "flex" : "hidden"} h-[100vh] bg-black/60 w-full fixed z-[5445156] top-0 left-0 justify-center items-center`}>
        <div className="w-[50%] max-h-[80%] rounded-4xl overflow-y-auto">
          <TowerPlansEditForm setFormPopUp={setFormPopUp} type={type} dataForId={dataForId} key={childRef} />
        </div>
      </div>
      <button onClick={()=>handleAdd()} className="absolute top-[170px] right-[4%] border border-blue-600 rounded-md px-6 py-1 text-blue-600 font-semibold hover:bg-blue-200 hover:text-blue-800 hover:border-blue-800">
        + Add
      </button>
    </div>
  );
}
