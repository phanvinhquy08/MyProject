const path = require("path");
const multer = require("multer");

module.exports = folderName => {
    return multer({
        fileFilter: (req, file, cb ) => {
            const ext = path.extname(file.originalname);
            if(
                ext !== ".jpg" &&
                ext !== ".png" &&
                ext !== ".gif" &&
                ext !== ".jpeg" 
            ) {
                return cb(new Error("Only image allowed"))
            }
            cb(null, true);
        },
        dest: `public/uploads/${folderName}/`
    });
};