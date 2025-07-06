import { useCallback, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import deleteButton from "/images/myImages/bin.png"
import axios from "axios";
import { toast } from "react-toastify";

export default function EnquiryFormTable() {

  const [ showData , setShowData ] = useState([]);

  const handleShowData = useCallback(async()=>{

    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.get("http://localhost:3000/auth/enquiry_form_read" , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      if(response?.data?.status == true) {
        setShowData(response?.data?.data)
      }

    } catch(error) {
      console.log("handleShowDataError:->" , error)
    }

  }, [])

  const handleDelete = async ( _id:any )=> {

    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.delete(`http://localhost:3000/auth/enquiry_form_delete/${_id}` , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      if(response?.data?.status == true) {
        handleShowData()
        toast.success("Data Deleted")
      }

    } catch(error) {
      console.log("handleDeleteError:->" , error)
    }

  }

  useEffect(()=>{
    handleShowData()
  }, [handleShowData])

  return (

    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}

          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell isHeader className="px-3 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400" >
                S No.
              </TableCell>
              <TableCell isHeader className="px-3 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400" >
                Full Name
              </TableCell>
              <TableCell isHeader className="px-3 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400" >
                Mobile
              </TableCell>
              <TableCell isHeader className="px-3 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400" >
                E-Mail
              </TableCell>
              <TableCell isHeader className="px-3 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400" >
                Section
              </TableCell>
              <TableCell isHeader className="px-3 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400" >
                Change
              </TableCell>
            </TableRow>

          </TableHeader>

          {/* Table Body */}

          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {showData?.map(( data:any , index )=>(
              <TableRow key={index}>
                <TableCell className="px-3 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {index < 9 ? "0" : ""}{index + 1}
                </TableCell>
                <TableCell className="px-3 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {data?.name}
                </TableCell>
                <TableCell className="px-3 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {data?.number}
                </TableCell>
                <TableCell className="px-3 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {data?.email}
                </TableCell>
                <TableCell className="px-3 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {data?.section}
                </TableCell>
                <TableCell>
                  <div className="flex justify-evenly">
                    <img onClick={()=>handleDelete(data?._id)} src={deleteButton} className="h-[22px] cursor-pointer" />
                  </div>
                </TableCell>
              </TableRow>
           ))}
          </TableBody>
        </Table>
      </div> 
    </div>
  );
}
