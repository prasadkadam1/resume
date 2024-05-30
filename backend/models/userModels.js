const { request } = require("express")
// const bcrypt = require('bcrypt')
// let jwt = require('jsonwebtoken')
const mongoose = require("mongoose")
const dotenv = require("dotenv")
//create schema
const userSchema = new mongoose.Schema({
  img: {
    type: String
  },
  studentName: {
    type: String
  },
  workingAs: {
    type: String
  },
  aboutSession: {
    type: String
  },

  pgPercentage: {
    type: Number
  },
  pgYearOfPassout: {
    type: Number
  },
  pgStream: {
    type: String
  },
  pgUniversity: {
    type: String
  },

  graduationPercentage: {
    type: Number
  },
  graduationYearOfPassout: {
    type: String
  },
  graduationStream: {
    type: String
  },
  graduationUniversity: {
    type: String
  },

  diplomaPercentage: {
    type: Number
  },
  diplomaYearOfPassout: {
    type: String
  },
  diplomaStream: {
    type: String
  },
  diplomaUniversity: {
    type: String
  },

  hscPercentage: {
    type: Number
  },
  hscYearOfPassout: {
    type: String
  },
  hscBoard: {
    type: String
  },
  hscStream: {
    type: String,
    default: "-"
  },

  sscPercentage: {
    type: Number
  },
  sscYearOfPassout: {
    type: String
  },
  sscBoard: {
    type: String
  },
  sscStream: {
    type: String,
    default: "-"
  },

  email: {
    type: String
  },
  phoneNo: {
    type: String
  },
  address: {
    type: String
  },
  linkedIn: {
    type: String
  },
  facebook: {
    type: String
  },
  twitter: {
    type: String
  },
  instagram: {
    type: String
  },
  otherSkills: {
    type: [String]
  },
  // softSkills: [],

  programmingLang: {
    type: [String]
  },
  webTech: {
    type: [String]
  },
  librariesFrameworks: {
    type: [String]
  },
  j2eeTech: {
    type: [String]
  },
  toolsUtilities: {
    type: [String]
  },
  otherTechnologies: {
    type: [String]
  },
  versionControl: {
    type: [String]
  },
  webAppServer: {
    type: [String]
  },

  // experience: [{
  companyName: {
    type: String
  },
  experienceInYears: {
    type: Number
  },
  keyResponsibility: {
    type: [String]
  },

  projectName: {
    type: String
  },
  description: {
    type: String
  },
  technologiesUsed: {
    type: [String]
  },
  team: {
    type: Number
  },
  achivements: {
    type: String
  },
},
  { timestamps: true }

)


// userSchema.pre("save", async function () {
//   let salt = await bcrypt.genSalt(5)
//   this.password = await bcrypt.hash(this.password, salt)
// })

// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };
// userSchema.methods.getToken = function () {
//   return jwt.sign({ id: this._id }, process.env.JWTSECRET, { expiresIn: process.env.JWTCOOKIEEXPIRE })
// }

module.exports = mongoose.model('user', userSchema)
