const path = require('path');
const multer = require('multer');  

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'./public/images/groups' )
                //path.join(__dirname,'./public/images/groups')
    },
    filename: (req,file,cb) => {
        const  newFilename = 'profile-' + Date.now() + path.extname(file.originalname);
        cb(null,newFilename)
    }
});


const uploadFile = multer ({storage});

module.exports = uploadFile;
