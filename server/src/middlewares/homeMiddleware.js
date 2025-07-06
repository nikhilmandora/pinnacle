import path from "path";
import multer from "multer";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    
    let pathToSave;

    if (req.originalUrl.includes("/hero_update")) {

      pathToSave = path.join(__dirname, "..", "..", "public", "assets" , "header");
        
    } else if (req.originalUrl.includes("/ourProducts_create") || req.originalUrl.includes("/ourProducts_update")) {

      pathToSave = path.join(__dirname, "..", "..", "public", "assets" , "products");

    } else if (req.originalUrl.includes("/key_highlights_create") || req.originalUrl.includes("/key_highlights_update")) {

      pathToSave = path.join(__dirname, "..", "..", "public", "assets" , "keyHighlights");

    } else if (req.originalUrl.includes("/nearby_create") || req.originalUrl.includes("/nearby_update")) {

      pathToSave = path.join(__dirname, "..", "..", "public", "assets" , "nearby");

    } else if (req.originalUrl.includes("/location_map_update")) {

      pathToSave = path.join(__dirname, "..", "..", "public", "assets" , "locationMapHeader");

    } else if (req.originalUrl.includes("/gallery_update")) {

      pathToSave = path.join(__dirname, "..", "..", "public", "assets" , "galleryHeader");

    } else if (req.originalUrl.includes("/amenities_update")) {

      pathToSave = path.join(__dirname, "..", "..", "public", "assets" , "amenitiesHeader");

    } else if (req.originalUrl.includes("/amenities_album_create") || req.originalUrl.includes("/amenities_album_update")) {

      pathToSave = path.join(__dirname, "..", "..", "public", "assets" , "amenitiesAlbum");

    } else if (req.originalUrl.includes("/price_update")) {

      pathToSave = path.join(__dirname, "..", "..", "public", "assets" , "priceHeader");

    } else if (req.originalUrl.includes("/plans_update")) {

      pathToSave = path.join(__dirname, "..", "..", "public", "assets" , "plansHeader");

    } else if (req.originalUrl.includes("/price_list_create") || req.originalUrl.includes("/price_list_update")) {

      pathToSave = path.join(__dirname, "..", "..", "public", "assets" , "priceList");

    } else if (req.originalUrl.includes("/tower_plans_create") || req.originalUrl.includes("/tower_plans_update")) {

      pathToSave = path.join(__dirname, "..", "..", "public", "assets" , "towerPlans");

    } else if (req.originalUrl.includes("/edit_details") ) {

      pathToSave = path.join(__dirname, "..", "..", "public", "assets" , "profilePic");

    }






    // let pathToSave = path.join( __dirname, ".." , ".." , "public" , "assets" );

    fs.mkdirSync(pathToSave, { recursive: true })
    return cb(null, pathToSave)
       
  },

  filename: function (req, file, cb) {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`
      cb(null, file.fieldname + '-' + uniqueSuffix)
  },
  
});



const upload = multer({
    storage: storage
})

export default upload;