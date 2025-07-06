import app from "express";

import testimonialController from "../controllers/testimonialController.js"
import faqController from "../controllers/faqController.js";
import homeController from "../controllers/homeController.js";
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

const webRouter = app.Router();

// HOME PAGE
// Web Hero Section (Header)
webRouter.get("/hero_read" , homeController.heroRead);



// Web Key Highlights
webRouter.get("/key_highlights_read" , keyHighlightsController.keyHighlightsRead);



// Web Our Products
webRouter.get("/ourProducts_read" , ourProductsController.ourProductRead);



// Web Testimonial
webRouter.get("/testimonial_show" , testimonialController.testiShow);



// Web Home Form
webRouter.post("/home_form_create" , formController.formCreate);



// LOCATION MAP PAGE
// Web Location Map Header
webRouter.get("/location_map_read", locationMapHeaderController.LMHRead);



// Web Near By
webRouter.get("/nearby_read" , nearByController.nearByRead);



// GALLERY PAGE
// Gallery Page Header
webRouter.get("/gallery_read" , galleryHeaderController.galleryHRead);



// AMENITIES PAGE
// Amenities Page Header
webRouter.get("/amenities_read" , amenitiesHeaderController.amenitiesHRead);



// Amenities Album
webRouter.get("/amenities_album_read" , amenitiesAlbumController.amenAlbumRead);



// PRICE PAGE
// Price Page Header
webRouter.get("/price_read" , priceHeaderController.priceHRead);



// Price Page Price List
webRouter.get("/price_list_read" , priceListController.dataRead);



// PLANS PAGE
// Plans page Header
webRouter.get("/plans_read" , plansHeaderController.plansRead);



// Tower Plans
webRouter.get("/tower_plans_read" , towerPlansController.towerPlansRead);



// Site Plans
webRouter.get("/site_plans_read" , sitePlansController.sitePlanRead);



// COMMON
// Web FAQs
webRouter.get("/faq_read" , faqController.faq_read);



// ENQUIRY FORM
webRouter.post("/enquiry_form_create" , enquiryFormController.enquiryFormCreate);



// Web Universal API Error
webRouter.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'API route not found'
  });
});



export default webRouter;