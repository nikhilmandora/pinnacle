import PageBreadcrumb from "../components/common/PageBreadCrumb";
import UserMetaCard from "../components/UserProfile/UserMetaCard";
import UserInfoCard from "../components/UserProfile/UserInfoCard";
import UserAddressCard from "../components/UserProfile/UserAddressCard";
import PageMeta from "../components/common/PageMeta";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function UserProfiles() {

  const [userData , setUserData] = useState({});

  const handleUserData = useCallback(async()=>{

    try{

      const token = sessionStorage.getItem("authToken");
      
      const response = await axios.get("http://localhost:3000/auth/getProfile", {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      if(response?.data?.status == true) {
        setUserData(response?.data?.data)
      }

    } catch(error){
      console.log("handleUserDataError:->" , error)
    }

  }, [])

  useEffect(()=>{
    handleUserData()
  }, [handleUserData])

  return (
    <>
      <PageMeta
        title="React.js Profile Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Profile Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Profile" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Profile
        </h3>
        <div className="space-y-6">
          <UserMetaCard userData={userData} />
          <UserInfoCard userData={userData} />
          <UserAddressCard userData={userData} />
        </div>
      </div>
    </>
  );
}
