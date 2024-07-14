const express = require('express');
const router = express.Router();
const multer = require('multer')
const storage = require("../../helpers/storageMulti");
// cloudinary
const upload = multer()
const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')
cloudinary.config({
    cloud_name: 'drblblupt',
    api_key: '448762746375892',
    api_secret: 'FfuL_9a0vFUWohEd-wOn5FpPsFg' // Click 'View Credentials' below to copy your API secret
});

// end cloudinary


//Cấu hình controller
const product = require("../../controllers/admin/product.controller")

router.get('/', product.index);
router.patch('/change-status/:status/:id', product.changeStatus);
router.patch('/change-multi', product.changeMulti);
router.delete('/delete/:id', product.delete);
router.get('/create', product.create);
router.post('/create', upload.single('thumbnail'), function (req, res, next) {
    if(req.file)
    {

        let streamUpload = (req) => {
            return new Promise((resolve, reject) => {
                let stream = cloudinary.uploader.upload_stream(
                    (error, result) => {
                        if (result) {
                            resolve(result);
                        } else {
                            reject(error);
                        }
                    }
                );
    
                streamifier.createReadStream(req.file.buffer).pipe(stream);
            });
        };
    
        async function upload(req) {
            let result = await streamUpload(req);
            console.log(result);
            req.body[req.file.fieldname] = result.url
            next();
        }
        upload(req);
    }
    else
    {
        next();
    }
}, product.createP);
router.get('/edit/:id', product.edit);
router.patch('/edit/:id', upload.single('thumbnail'),function (req, res, next) {
    if(req.file)
    {

        let streamUpload = (req) => {
            return new Promise((resolve, reject) => {
                let stream = cloudinary.uploader.upload_stream(
                    (error, result) => {
                        if (result) {
                            resolve(result);
                        } else {
                            reject(error);
                        }
                    }
                );
    
                streamifier.createReadStream(req.file.buffer).pipe(stream);
            });
        };
    
        async function upload(req) {
            let result = await streamUpload(req);
            console.log(result);
            req.body[req.file.fieldname] = result.url
            next();
        }
        upload(req);
    }
    else
    {
        next();
    }
} ,product.editP);



module.exports = router;