import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import editButton from "/images/myImages/pen.png"
import deleteButton from "/images/myImages/bin.png"
import SitePlansEditForm from "../../form/SitePlansForm copy/SitePlansEditForm";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Switch from "../../form/switch/Switch";

export default function SitePlansTable() {

  const [ childref , setkeycomponent ] = useState(0)

  const [ formPopup , setFormPopUp ] = useState(false);

  const [ type , setType ] = useState("");

  const [ showData , setShowData ] = useState<any>([]);

  let initData = {
    entry: ""
  }

  const [ dataForId , setDataForId ] = useState(initData)

  const handleShow = useCallback(async()=>{

    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.get("http://localhost:3000/auth/site_plans_read" , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      if(response?.data?.status == true) {
        setShowData(response?.data?.data);
      }

    } catch(error) {
      console.log("handleShowError:->" , error);
    }

  }, [])

  const handleDelete = async (_id:any)=>{
    
    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.delete(`http://localhost:3000/auth/site_plans_delete/${_id}` , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })

      if(response?.data?.status == true){
        handleShow()
        toast.success("Entry Deleted")
      }

    } catch(error) {
      console.log("handleDeleteError:->" , error)
    }

  }

  const handleUpdateStatus = async (_id:any , status:boolean)=>{
    
    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.put(`http://localhost:3000/auth/site_plans_update_status/${_id}` , {status: !status} , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })

      if(response?.data?.status == true){
        handleShow()
        toast.success("Status Updated")
      }

    } catch(error) {
      console.log("handleUpdateStatusError:->" , error)
    }

  }

  useEffect(()=>{
    handleShow()
  }, [handleShow , formPopup])

  const handleEdit = async (showingData:any)=> {
    setkeycomponent(Math.random());
    setFormPopUp(true);
    setType("edit");
    setDataForId(showingData);
  }

  const handleAdd = async ()=> {
    setkeycomponent(Math.random());
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
                Site Plans
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
              {showData?.map((showingData:any , index:any)=>(
              <TableRow key={index}>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {index < 9 ? "0" : ""}{index + 1}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {showingData?.entry}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  <div className="flex -space-x-2">
                  <Switch label="" defaultChecked={showingData?.status} onChange={()=>handleUpdateStatus(showingData?._id , showingData?.status)} />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-evenly">
                    <img onClick={()=>handleEdit(showingData)} src={editButton} className="h-[22px] cursor-pointer" />
                    <img onClick={()=>handleDelete(showingData?._id)} src={deleteButton} className="h-[22px] cursor-pointer" />
                  </div>
                </TableCell>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      <div className={`${formPopup == true ? "flex" : "hidden"} h-[100vh] bg-black/60 w-full fixed z-[5445156] top-0 left-0 justify-center items-center`}>
        <div className="w-[50%] max-h-[80%] rounded-4xl overflow-y-auto">
          <SitePlansEditForm key={childref} setFormPopUp={setFormPopUp} type={type} dataForId={dataForId} />
        </div>
      </div>
      <button onClick={()=>handleAdd()} className="absolute top-[170px] right-[4%] border border-blue-600 rounded-md px-6 py-1 text-blue-600 font-semibold hover:bg-blue-200 hover:text-blue-800 hover:border-blue-800">
        + Add
      </button>
    </div>
  );
}
