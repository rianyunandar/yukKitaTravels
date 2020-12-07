const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const usersSchema = new mongoose.Schema({
    username:{
        type:String,
        require
    }
})