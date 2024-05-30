let multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now(), file.originalname)
  }
})
multer({
  storage: storage
})
module.exports = { storage }