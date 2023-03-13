var multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "images/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); //Appending extension
    },
    fileFilter(req, file, cb) {
        console.log(file);
        if (!file.originalname.match(/\.(jpg|jpeg|png|pdf|svg)$/)) {
            // nese file nuk eshte png,ose jpg ose jpeg, mos me lan me bo upload
            return cb(
                new Error(
                    "File must be JPG or JPEG or PNG or PDF or SVG to be uploaded"
                )
            );
        }
        cb(undefined, true);
    },
});

var upload = multer({
    storage
});

module.exports = {
    upload
};