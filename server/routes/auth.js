const express = require ('express')
const routeruser = express.Router()
const {register,login} = require('../controllers/auth')
const {profile} = require('../controllers/profile')

const User = require ('../model/auth')


routeruser.post('/register',register)
routeruser.post('/login',login)

routeruser.post('/profile',profile)

// routeruser.post('/login',profile)

module.exports = routeruser