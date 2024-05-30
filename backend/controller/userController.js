let UserSchema = require("../models/userModels.js")
exports.addUser = async (req, res) => {
  let payload = {
    img: req.file,
    studentName: req.body.studentName,
    otherSkills: req.body.otherSkills,
    sscPercentage: req.body.sscPercentage
  }
  // let image = req.file
  await UserSchema.create(payload)
  res.send("data stored")
}