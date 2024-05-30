let { Router } = require('express')
const { addUser } = require('../controller/userController')
let router = Router()
let multer = require('multer')
const uploadImg = require("../config/multer.js")
const upload = multer({
  storage: uploadImg.storage
})
router.post("/addUser", upload.single("img"), addUser)












module.exports = router