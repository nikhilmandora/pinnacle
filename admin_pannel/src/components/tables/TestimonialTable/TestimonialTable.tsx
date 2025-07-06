import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import editButton from "/images/myImages/pen.png"
import deleteButton from "/images/myImages/bin.png"
import TestimonialEditForm from "../../form/testimonial/TestimonialEditForm";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Switch from "../../form/switch/Switch";


export default function TestimonialTable() {

  const [editUserPopup, setEditUserPopup] = useState(false);

  const [type, setType] = useState("")

  let initdata = {
    _id: "",
    name: "",
    work: "",
    comment: ""
  }
  const [editData , setEditData] = useState(initdata)

  const [showData, setShowData] = useState<any>([]);

  const handleEdit = async (data: any)  => {
    setEditData(data)
    setEditUserPopup(true)
    setType("edit")
  }

  const handleShow = useCallback( async () => {

    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.get("http://localhost:3000/auth/testimonial_show" , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })
      
      if (response?.data?.status == true) {
        setShowData(response?.data?.data);
      }

    } catch (error) {
      alert("Can't Show Data");
    }

  } , [])

  useEffect(() => {
    handleShow()
  }, [handleShow, editUserPopup , setEditData])

  const handleDelete = async (_id: any) => {

    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.delete(`http://localhost:3000/auth/testimonial_delete/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      if (response?.data?.status == true) {
        toast.success("Review Deleted")
        handleShow()
      }

    } catch (error) {
      alert("Can't Delete")
    }

  }

  const handleUpdateStatus = async (_id:any , status:boolean) => {

    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.put(`http://localhost:3000/auth/testimonial_update_status/${_id}` , {status: !status} , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      } );

      if (response?.data?.status == true) {
        toast.success("Review Status Updated");
        handleShow()
      }

    } catch (error) {
      console.log("handleUpdateStatusError:->" , error)
    }

  }

  return (

    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                S No.
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Name
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Work
              </TableCell>
              <TableCell isHeader className="px-5 py-3 w-[40%] font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Content
              </TableCell>
              <TableCell isHeader className="px-5 py-3 w-[15%] font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Status
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Change
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {showData?.map((list: any, index: any) => (
              <TableRow key={index}>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {index < 9 ? "0" : ""}{index + 1}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {list?.name}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  <div className="flex -space-x-2">
                    {list?.work}
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {list?.comment}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  <div className="flex -space-x-2">
                  <Switch label="" defaultChecked={list?.status} onChange={() => handleUpdateStatus(list?._id , list?.status)}/>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-evenly">
                    <img onClick={() => handleEdit(list)} src={editButton} className="h-[22px] cursor-pointer" />
                    <img onClick={() => handleDelete(list?._id)} src={deleteButton} className="h-[22px] cursor-pointer" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className={`h-[100vh] bg-black/60 w-full fixed z-[5445156] top-0 left-0 justify-center items-center ${editUserPopup == true ? "flex" : "hidden"}`}>
        <div className="w-[50%] max-h-[80%] rounded-4xl overflow-y-auto">
          <TestimonialEditForm setEditUserPopup={setEditUserPopup} type={type} data={editData} />
        </div>
      </div>
      <button onClick={() => {setEditUserPopup(true); setEditData(initdata); setType("add")}} className="absolute top-[170px] right-[4%] border border-blue-600 rounded-md px-6 py-1 text-blue-600 font-semibold hover:bg-blue-200 hover:text-blue-800 hover:border-blue-800">
        + Add
      </button>
    </div>
  );
}
