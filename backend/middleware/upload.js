const path = require('path')
const multer = require('multer')




let upload = multer({
    storage: storage,
    fileFilter: (req, file, callback) => {
        if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg') {
            callback(null, true)
        } else {
            console.log('only jpg || png file supported')
            callback(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})

module.exports = upload