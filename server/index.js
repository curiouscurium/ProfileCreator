const express  = require ('express')
const mongoose  = require ('mongoose')
const dotenv = require ('dotenv')
const cors = require ('cors')
const app = express()

dotenv.config();

mongoose.connect(process.env.DB_CONNECT,
{useNewUrlParser:true,useUnifiedTopology:true},
()=>console.log('Connect to DB')
);

app.use(express.json());
app.use(express.urlencoded())
app.use(cors())



const authRoute = require( './routes/auth')
// const profileRoute = require('./routes/profile')



app.use('/user',authRoute)
app.use('/user/private',require('./routes/private'))
// app.use('/profile',profileRoute)



app.listen(5000,() =>{console.log(`Server is running`)});