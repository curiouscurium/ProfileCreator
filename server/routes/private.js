const express  = require ('express')
const router = express.Router();
const {getPrivateData} = require('../controllers/private')
const {protect} = require ('../middleware/auth')
// const getProfile  = require ('../controllers/profile')

// const router = express.Router();

// router.get('/',getProfile)

router.get('/',protect,getPrivateData)

module.exports = router

// export default router