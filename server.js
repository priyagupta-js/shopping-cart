const express = require('express')
const app = express()
const connectDB = require('./db');
const dotenv = require('dotenv');
const users = require('./src/Routes/routes')



dotenv.config();
//body parser

const PORT = process.env.PORT;
app.use(express.json());

//connect to database
connectDB();
app.use('/api',users);

app.get('/',(req,res)=>{
    console.log("Setup is running!!");
    res.send("Setup successfull");
})

app.listen(PORT , () =>{
    console.log(`App is listening at port ${PORT}`);
})