const express = require('express');
const router = express.Router();
const User = require('../Models/userModels');


//Routes 
//CRUD operations
//Read
router.get('/user',(req,res) =>{
    console.log('code running!!');
})
//POST
//DELETE
//PUSH

module.exports = router;