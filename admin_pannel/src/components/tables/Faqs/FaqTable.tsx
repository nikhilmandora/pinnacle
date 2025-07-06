import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import editButton from "/images/myImages/pen.png"
import deleteButton from "/images/myImages/bin.png"
import FaqsEditForm from "../../form/faqs/FaqsEditForm";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Switch from "../../form/switch/Switch";

export default function FaqTable() {

  const [formPopUp , setFormPopUp] = useState(false);

  const [type , setType] = useState("");

  const [faqShow , setFaqShow] = useState([]);

  let initdata = {
    _id: "",
    ques: "",
    ans: ""
  }
  const [editData , setEditData] = useState(initdata);

  const handleEdit = async (data:any) => {
    setEditData(data);
    setFormPopUp(true); 
    setType("edit");
  }

  const handleShowFaq = useCallback( async() => {

    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.get("http://localhost:3000/auth/faq_read" , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })

      if(response?.data?.status == true) {
        console.log("response",response.data)
        setFaqShow(response?.data?.data)
      }

    } catch(error) {
      console.log("Show Error:->" , error);
    }

  } , [])

  const handleDelete = async (_id:any) => {

    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.delete(`http://localhost:3000/auth/faq_delete/${_id}` , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })

      if(response?.data?.status == true) {
        toast.success("FAQ Deleted");
        handleShowFaq()
      }

    } catch(error) {
      console.log("Delete Error:->" , error);
    }

  }

  const handleUpdateStatus = async (_id:any, status:boolean) => {

    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.put(`http://localhost:3000/auth/faq_update_status/${_id}`, {status : !status } , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })
      
      if(response?.data?.status == true) {
        toast.success("FAQ Status Updated");
        handleShowFaq()
      }

    } catch(error) {
      console.log("handleUpdateStatusError:->" , error);
    }
  }

  useEffect(() => {
    handleShowFaq()
  }, [ handleShowFaq , formPopUp ])

  return (

    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell isHeader className="px-5 py-3 w-[10%] font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                S No.
              </TableCell>
              <TableCell isHeader className="px-5 py-3 w-[30%] font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Question
              </TableCell>
              <TableCell isHeader className="px-5 py-3 w-[35%] font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Answer
              </TableCell>
              <TableCell isHeader className="px-5 py-3 w-[15%] font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Status
              </TableCell>
              <TableCell isHeader className="px-5 py-3 w-[10%] font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Change
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {faqShow?.map((faqList:any , index:any)=>(
              <TableRow key={index}>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {index < 9 ? "0" : ""}{ index + 1 }
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {faqList?.ques}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  <div className="flex -space-x-2">
                  {faqList?.ans}
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  <div className="flex -space-x-2">
                  <Switch label="" defaultChecked={faqList?.status} onChange={()=>handleUpdateStatus(faqList?._id, faqList?.status)} />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-evenly">
                    <img onClick={()=>handleEdit(faqList)} src={editButton} className="h-[22px] cursor-pointer" />
                    <img onClick={()=>handleDelete(faqList?._id)} src={deleteButton} className="h-[22px] cursor-pointer" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className={`h-[100vh] bg-black/60 w-full fixed z-[5445156] top-0 left-0 justify-center items-center ${formPopUp == true? "flex" : "hidden"}`}>
        <div className="w-[50%] max-h-[80%] rounded-4xl overflow-y-auto">
          <FaqsEditForm setFormPopUp={setFormPopUp} type={type} data={editData} />
        </div>
      </div>
      <button onClick={()=>{setFormPopUp(true); setEditData(initdata) ; setType("add")}} className="absolute top-[170px] right-[4%] border border-blue-600 rounded-md px-6 py-1 text-blue-600 font-semibold hover:bg-blue-200 hover:text-blue-800 hover:border-blue-800">
        + Add
      </button>
    </div>
  );
}
