import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
// import Home from "./pages/Dashboard/Home";
import UserTable from "./pages/Tables/UserTable";
import HomePage from "./pages/HomePage/HomePage";
import Testimonial from "./pages/Tables/Testimonial";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FaqTable from "./pages/Tables/Faq";
import OurProducts from "./pages/Tables/OurProducts";
import KeyHighlights from "./pages/Tables/KeyHighlights";
import FormHome from "./pages/Tables/FormHome";
import NearBy from "./pages/Tables/NearBy";
import LocationMapPage from "./pages/LocationMapPage/LocationMapPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import AmenitiesPage from "./pages/AmenitiesPage/AmenitiesPage";
import AmenitiesAlbum from "./pages/Tables/AmenitiesAlbum";
import PricePage from "./pages/PricePage/PricePage";
import PlansPage from "./pages/PlansPage/PlansPage";
import PriceList from "./pages/Tables/PriceList";
import TowerPlans from "./pages/Tables/TowerPlans";
import SitePlans from "./pages/Tables/SitePlans";
import EnquiryForm from "./pages/Tables/EnquiryForm";

export default function App() {

  const PrivateRoute = () => {

    const isAuthenticated = !!sessionStorage.getItem("authToken");
  
    return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
    
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <ToastContainer position="bottom-right"/>
        <Routes>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
       
          {/* Dashboard Layout */}

          <Route element={<PrivateRoute />}>
            <Route element={<AppLayout />}>
              {/* <Route index path="/" element={<Home />} /> */}

              {/* Others Page */}
              <Route path="/" element={<UserProfiles />} />
              <Route path="/home_page" element={<HomePage/>} />
              <Route path="/location_map_page" element={<LocationMapPage />} />
              <Route path="/gallery_page" element={<GalleryPage />} />
              <Route path="/amenities_page" element={<AmenitiesPage />} />
              <Route path="/price_page" element={<PricePage />} />
              <Route path="/plans_page" element={<PlansPage />} />

              {/* Tables */}
              <Route path="/user_list_table" element={<UserTable />} />
              <Route path="/testimonial" element={<Testimonial />} />
              <Route path="/faqs" element={<FaqTable />} />
              <Route path="/our_products" element={<OurProducts />} />
              <Route path="/key_highlights" element={<KeyHighlights />} />
              <Route path="/home_form" element={<FormHome />} />
              <Route path="/nearby" element={<NearBy />} />
              <Route path="/amenities_album" element={<AmenitiesAlbum />} />
              <Route path="/price_list" element={<PriceList />} />
              <Route path="/tower_plans" element={<TowerPlans />} />
              <Route path="/site_plans" element={<SitePlans />} />
              <Route path="/enquiry_form" element={<EnquiryForm />} />
            </Route>

            {/* Fallback Route */}
            <Route path="*" element={<NotFound />} />

          </Route>
          
        </Routes>
      </Router>
    </>
  );
}
