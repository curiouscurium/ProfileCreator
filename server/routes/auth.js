const express = require ('express')
const routeruser = express.Router()
const {register,login} = require('../controllers/auth')
const {createProfile,getProfile} = require('../controllers/profile')
const protect = require('../middleware/auth')

const User = require ('../model/auth')
const  Profile = require('../model/profilemodel')


routeruser.post('/register',register)
routeruser.post('/login',login)

routeruser.post('/profile',protect,createProfile)
routeruser.get('/profile/:id',protect,getProfile)
// routeruser.get('/profile',getProfile)

// routeruser.post('/login',profile)

module.exports = routeruser