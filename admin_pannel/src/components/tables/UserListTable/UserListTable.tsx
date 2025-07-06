import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import editButton from "/images/myImages/pen.png"
import deleteButton from "/images/myImages/bin.png"
import UserEditForm from "../../form/userEditForm/UserEditForm";

interface IOrder {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

export default function UserListTable() {

  const [editUserPopup , setEditUserPopup] = useState(false);
  
  const [userDetail , setUserDetail] = useState<any>();

  const [userData, setUserData] = useState<IOrder[]>([]);

  const handleDelete = async (_id: any) => {

    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.delete(`http://localhost:3000/auth/user_delete/${_id}` , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      if (response?.data?.status == true) {
        toast.success("User Deleted");
        handleUserData()
      }

    } catch (error) {
      alert("Data Can't Delete");
    }
  }

  const handleUserData = async () => {

    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.get("http://localhost:3000/auth/user_list", {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
    
      if (response?.data?.status) {
        setUserData(response.data.data);
      }

    } catch (error) {
      alert("Data Can't load");
    }
  }

  useEffect(() => {
    if (userData.length == 0) {
      handleUserData();
    }
  })

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
                Profile Image
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                UserName
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                E-Mail
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Role
              </TableCell>
              {/* <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Password
              </TableCell> */}
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Change
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {userData?.map((order:any, index:any) => (
              <TableRow key={index}>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {index < 9 ? "0" : ""} {index + 1}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  <img src="/images/user/owner.jpg" className="rounded-full h-[40px]" />
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {order?.name}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  <div className="flex -space-x-2">
                    {order?.email}
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  <div className="flex -space-x-2">
                    {order?.role}
                  </div>
                </TableCell>
                {/* <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                  {order?.password}
                </TableCell> */}
                <TableCell>
                  <div className="flex justify-evenly">
                    <img onClick={()=>{setEditUserPopup(true), setUserDetail(order)}} src={editButton} className="h-[22px] cursor-pointer" />
                    <img onClick={() => handleDelete(order?._id)} src={deleteButton} className="h-[22px] cursor-pointer" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className={`h-[100vh] bg-black/60 w-full fixed z-[5445156] top-0 left-0 flex justify-center items-center ${editUserPopup == true? "flex" : "hidden"}`}>
        <div className="w-[50%] max-h-[80%] rounded-4xl overflow-y-auto">
          <UserEditForm setEditUserPopup={setEditUserPopup} handleUserData={handleUserData} userDetail={userDetail} />
        </div>
      </div>
    </div>
  );
}
