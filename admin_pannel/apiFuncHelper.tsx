import axios from "axios"
import { toast } from "react-toastify"

export const HandleLogout = async () => {

    const token = sessionStorage.getItem("authToken") || localStorage.getItem("authToken");

    try {

        await axios.get("http://localhost:3000/auth/logout", {
            headers: {
                Authorization: `Bearer ${token}`,
            },

        });

        sessionStorage.removeItem("authToken");
        localStorage.removeItem("authToken");

        toast.success("Logged out successfully");

    } catch (error) {
        toast.error("Logout failed");
    }

};