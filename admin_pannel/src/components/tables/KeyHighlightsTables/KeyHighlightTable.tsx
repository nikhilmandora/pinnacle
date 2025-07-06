import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import editButton from "/images/myImages/pen.png"
import deleteButton from "/images/myImages/bin.png"
import KeyHighlightsEditForm from "../../form/keyHighlightForm/KeyHighlightsEditForm";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Switch from "../../form/switch/Switch";

export default function KeyHightlightTable() {

  let imgPath = "http://localhost:3000/assets/keyHighlights/"

  const [ childRef , setComponentKey ] = useState(0);

  const [ formPopUp , setFormPopUp ] = useState(false);

  const [ type , setType ] = useState("")

  let initData = {
    _id: "",
    heading: "",
    description: "",
    image: null
  }

  const [ dataForID , setDataForID ] = useState(initData);

  const [ showDetails , setShowDetails ] = useState([]);

  const handleShowDetails = useCallback(async()=>{

    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.get("http://localhost:3000/auth/key_highlights_read" , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      if(response?.data?.status == true) {
        setShowDetails(response?.data?.data)
      }

    } catch(error) {
      console.log("handleShowDetailsError:=>" , error)
    }

  }, [] )

  const handleDelete = async ( _id:any )=> {

    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.delete(`http://localhost:3000/auth/key_highlights_delete/${_id}` , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      if(response?.data?.status == true) {
        toast.success("Delete Successfully");
        handleShowDetails()
      }

    } catch(error) {
      console.log("handleDeleteError:=>" , error)
    }

  }

  const handleUpdateStatus = async ( _id:any , status:boolean)=> {

    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.put(`http://localhost:3000/auth/key_highlights_update_status/${_id}` , {status: !status} , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      if(response?.data?.status == true) {
        toast.success("Status Updated");
        handleShowDetails()
      }

    } catch(error) {
      console.log("handleUpdateStatusError:=>" , error);
    }

  }

  const handleEditButton = async (showingDetails:any)=>{
    setComponentKey(Math.random());
    setFormPopUp(true);
    setType("edit");
    setDataForID(showingDetails);
  }

  useEffect(()=>{
    handleShowDetails()
  }, [handleShowDetails , formPopUp])

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
              <TableCell isHeader className="w-[16%] px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400" >
                Heading
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400" >
                Background
              </TableCell>
              <TableCell isHeader className="w-[30%] px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400" >
                Description
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Status
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400" >
                Change
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {showDetails?.map((showingDetails:any , index:any)=>(
              <TableRow key={index}>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {index < 9 ? "0" : ""}{index + 1}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {showingDetails?.heading}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                 <img src={`${imgPath}${showingDetails.image}`} className="bg-cover h-[120px] w-[200px]" />  
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {showingDetails?.description}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  <div className="flex -space-x-2">
                  <Switch label="" defaultChecked={showingDetails?.status} onChange={()=>handleUpdateStatus(showingDetails?._id , showingDetails?.status)} />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-evenly">
                    <img onClick={()=>handleEditButton(showingDetails)} src={editButton} className="h-[22px] cursor-pointer" />
                    <img onClick={()=>handleDelete(showingDetails?._id)} src={deleteButton} className="h-[22px] cursor-pointer" />
                  </div>
                </TableCell>
              </TableRow>
           ))}
          </TableBody>
        </Table>
      </div>
      <div className={`${formPopUp == true ? "flex" : "hidden"} h-[100vh] bg-black/60 w-full fixed z-[5445156] top-0 left-0 justify-center items-center`}>
        <div className="w-[50%] max-h-[80%] rounded-4xl overflow-y-auto">
          <KeyHighlightsEditForm setFormPopUp={setFormPopUp} type={type} dataForID={dataForID} key={childRef} />
        </div>
      </div>
      <button onClick={()=>{ setFormPopUp(true); setType("add"); setDataForID(initData); setComponentKey(Math.random()); }} className="absolute top-[170px] right-[4%] border border-blue-600 rounded-md px-6 py-1 text-blue-600 font-semibold hover:bg-blue-200 hover:text-blue-800 hover:border-blue-800">
        + Add
      </button>
    </div>
  );
}
