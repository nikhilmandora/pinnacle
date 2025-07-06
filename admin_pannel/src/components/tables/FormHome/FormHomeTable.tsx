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

export default function FormHomeTable() {

  const [ showForm , setShowForm ] = useState([]);

  const handleShowForm = useCallback(async()=>{

    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.get("http://localhost:3000/auth/home_form_read" , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })

      if(response?.data?.status == true){
        setShowForm(response?.data?.data)
      }

    } catch(error) {
      console.log("handleShowFormError:=>" , error)
    }

  }, [])

  const handleDelete = async ( _id:any ) => {

    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.delete(`http://localhost:3000/auth/home_form_delete/${_id}` , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })

      if(response?.data?.status == true) {
        toast.success("Delete Successfully");
        handleShowForm()
      }

    } catch(error) {
      toast.error("Can't Delete")
    }

  }

  useEffect(()=>{
    handleShowForm()
  }, [handleShowForm])

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
                City
              </TableCell>
              <TableCell isHeader className="px-3 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400" >
                House
              </TableCell>
              <TableCell isHeader className="px-3 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400" >
                Broker
              </TableCell>
              <TableCell isHeader className="px-3 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400" >
                Know About Us
              </TableCell>
              <TableCell isHeader className="px-3 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400" >
                Message
              </TableCell>
              <TableCell isHeader className="px-3 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400" >
                Change
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {showForm?.map(( fData:any , index:any )=>(
              <TableRow key={index}>
                <TableCell className="px-3 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {index < 9 ? "0" : ""}{index + 1}
                </TableCell>
                <TableCell className="px-3 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {fData?.firstName} {fData?.lastName}
                </TableCell>
                <TableCell className="px-3 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {fData?.mobile}
                </TableCell>
                <TableCell className="px-3 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {fData?.email}
                </TableCell>
                <TableCell className="px-3 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {fData?.city}
                </TableCell>
                <TableCell className="px-3 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {fData?.homeSize}
                </TableCell>
                <TableCell className="px-3 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {fData?.broker}
                </TableCell>
                <TableCell className="px-3 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {fData?.hearAboutUs}
                </TableCell>
                <TableCell className="px-3 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {fData?.message}
                </TableCell>
                <TableCell>
                  <div className="flex justify-evenly">
                    <img onClick={()=>handleDelete(fData?._id)} src={deleteButton} className="h-[22px] cursor-pointer" />
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
