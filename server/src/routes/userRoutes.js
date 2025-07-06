import app from "express";

import userController from "../controllers/userController.js";
import authController from "../controllers/authController.js";
import homeController from "../controllers/homeController.js";
import testimonialController from "../controllers/testimonialController.js";
import faqController from "../controllers/faqController.js";
import upload from "../middlewares/homeMiddleware.js";
import ourProductsController from "../controllers/ourProductsController.js";
import keyHighlightsController from "../controllers/keyHighlightsController.js";
import formController from "../controllers/formController.js";
import nearByController from "../controllers/nearByController.js";
import locationMapHeaderController from "../controllers/locationMapHeaderController.js";
import galleryHeaderController from "../controllers/galleryHeaderController.js";
import amenitiesHeaderController from "../controllers/amenitiesHeaderController.js";
import amenitiesAlbumController from "../controllers/amenitiesAlbumController.js";
import priceHeaderController from "../controllers/priceHeaderController.js";
import plansHeaderController from "../controllers/plansHeaderController.js";
import priceListController from "../controllers/priceListController.js";
import towerPlansController from "../controllers/towerPlansController.js";
import sitePlansController from "../controllers/sitePlansController.js";
import enquiryFormController from "../controllers/enquiryFormController.js";
import authCheck from "../middlewares/authCheck.js";

const router = app.Router()

// ADMIN PANNEL
// Admin User Sign-In
router.post('/sign_up' , authController.sign_up);
router.post("/sign_in" , authController.sign_in);

router.use(authCheck);

router.get("/getProfile" , userController.getProfile);
router.get("/user_list" , userController.user_list);
router.delete("/user_delete/:id?" , userController.user_delete);
router.put("/edit_details/:_id?" , upload.single("image") , userController.edit_details);
router.get("/logout" , userController.logout);



// HOME PAGE 
// Admin User Header
router.post("/hero_create" , homeController.heroCreate);
router.put("/hero_update/:_id?" , upload.single("image") , homeController.heroUpdate);
router.get("/hero_read", homeController.heroRead);



// Admin User Key Highlights
router.post("/key_highlights_create" , upload.single("image") , keyHighlightsController.keyHighlightsCreate);
router.put("/key_highlights_update/:_id?" , upload.single("image") ,  keyHighlightsController.keyHighlightsUpdate);
router.put("/key_highlights_update_status/:_id?" , keyHighlightsController.keyHighlightsUpdateStatus);
router.get("/key_highlights_read" , keyHighlightsController.keyHighlightsRead);
router.delete("/key_highlights_delete/:_id?" , keyHighlightsController.keyHighlightsDelete);



// Admin User Our Products
router.post("/ourProducts_create" , upload.single("image") , ourProductsController.ourProductCreate);
router.put("/ourProducts_update/:_id?" , upload.single("image") , ourProductsController.ourProductUpdate);
router.put("/ourProducts_update_status/:_id?" , ourProductsController.ourProductUpdateStatus);
router.get("/ourProducts_read" , ourProductsController.ourProductRead);
router.delete("/ourProducts_delete/:_id?" , ourProductsController.ourProductDelete);



// Admin User Testimonial
router.post("/testimonial_save" , testimonialController.testiSave);
router.put("/testimonial_update/:_id?" ,  testimonialController.testiUpdate);
router.put("/testimonial_update_status/:_id?" ,  testimonialController.testiUpdateStatus);
router.get("/testimonial_show" , testimonialController.testiShow);
router.delete("/testimonial_delete/:_id?", testimonialController.testiDelete);



// Admin User Home Form
router.get("/home_form_read" , formController.formShow);
router.delete("/home_form_delete/:_id?" , formController.formDelete);



// LOCATION MAP PAGE
// Admin User Location Map Header
router.post("/location_map_create" , locationMapHeaderController.LMHCreate);
router.put("/location_map_update/:_id?" , upload.single("image") , locationMapHeaderController.LMHUpdate);
router.get("/location_map_read", locationMapHeaderController.LMHRead);



// Admin User Near By
router.post("/nearby_create" , upload.single("image") , nearByController.nearByCreate);
router.put("/nearby_update/:_id?" , upload.single("image") , nearByController.nearByupdate);
router.put("/nearby_update_status/:_id?" , nearByController.nearByUpdateStatus);
router.get("/nearby_read" , nearByController.nearByRead);
router.delete("/nearby_delete/:_id?" , nearByController.nearByDelete);



// GALLERY PAGE
// Gallery Header
router.post("/gallery_create" , galleryHeaderController.galleryHCreate);
router.put("/gallery_update/:_id?" , upload.single("image") , galleryHeaderController.galleryHUpdate);
router.get("/gallery_read" , galleryHeaderController.galleryHRead);



// AMENITIES PAGE
// Amenities Page Header
router.post("/amenities_create" , amenitiesHeaderController.amenitiesHCreate);
router.put("/amenities_update/:_id?" , upload.single("image") , amenitiesHeaderController.amenitiesHUpdate);
router.get("/amenities_read" , amenitiesHeaderController.amenitiesHRead);



// Amenities Album
router.post("/amenities_album_create" , upload.single("image") , amenitiesAlbumController.amenAlbumCreate);
router.put("/amenities_album_update/:_id?" , upload.single("image") , amenitiesAlbumController.amenAlbumUpdate);
router.put("/amenities_album_update_status/:_id?" , amenitiesAlbumController.amenAlbumUpdateStatus);
router.get("/amenities_album_read" , amenitiesAlbumController.amenAlbumRead);
router.delete("/amenities_album_delete/:_id?" , amenitiesAlbumController.amenAlbumDelete);



// PRICE PAGE
// Price Page Header
router.post("/price_create" , priceHeaderController.priceHCreate);
router.put("/price_update/:_id?" , upload.single("image") , priceHeaderController.priceHUpdate);
router.get("/price_read" , priceHeaderController.priceHRead);



// Price Page Price List
router.post("/price_list_create" , upload.single("image") , priceListController.dataCreate);
router.put("/price_list_update/:_id?" , upload.single("image") , priceListController.dataUpdate);
router.put("/price_list_update_status/:_id?" , priceListController.dataUpdateStatus);
router.get("/price_list_read" , priceListController.dataRead);
router.delete("/price_list_delete/:_id?" , priceListController.dataDelete);



// PLANS PAGE
// Plans Page Header
router.post("/plans_create" , plansHeaderController.plansCreate);
router.put("/plans_update/:_id?" , upload.single("image") , plansHeaderController.plansUpdate);
router.get("/plans_read" , plansHeaderController.plansRead);



// Tower Plans
router.post("/tower_plans_create" , upload.single("image") , towerPlansController.towerPlansCreate);
router.put("/tower_plans_update/:_id?" , upload.single("image") , towerPlansController.towerPlansUpdate);
router.put("/tower_plans_update_status/:_id?" , towerPlansController.towerPlansUpdateStatus);
router.get("/tower_plans_read" , towerPlansController.towerPlansRead);
router.delete("/tower_plans_delete/:_id?" , towerPlansController.towerPlansDelete);



// Site Plans
router.post("/site_plans_create" , sitePlansController.sitePlanCreate);
router.put("/site_plans_update/:_id?" , sitePlansController.sitePlanUpdate);
router.put("/site_plans_update_status/:_id?" , sitePlansController.sitePlanUpdateStatus);
router.get("/site_plans_read" , sitePlansController.sitePlanRead);
router.delete("/site_plans_delete/:_id?" , sitePlansController.sitePlanDelete);



// ENQUIRY FORM
router.get("/enquiry_form_read" , enquiryFormController.enquiryFormRead);
router.delete("/enquiry_form_delete/:_id?" , enquiryFormController.enquiryFormDelete);



// COMMON
// Admin User FAQs
router.post("/faq_create" , faqController.faq_create);
router.put("/faq_update/:_id?" , faqController.faq_update);
router.put("/faq_update_status/:_id?" , faqController.faq_update_status);
router.get("/faq_read" , faqController.faq_read);
router.delete("/faq_delete/:_id?" , faqController.faq_delete);



export default router;