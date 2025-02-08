const express = require('express')
const app = express()
const connectDB = require('./db');

const users = require('./src/Routes/routes')
const PORT = 3000;

//body parser
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