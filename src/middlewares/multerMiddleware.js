const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`; 
        //aca arriba va unas comillas raras
        cb(null,fileName);
    }
})



const uploadFile = multer ({storage});

module.exports = uploadFile;
