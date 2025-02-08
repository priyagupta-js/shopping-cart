const express = require("express");
const router = express.Router();
const userModel = require("../../Models/userModels");

//Routes
//CRUD operations
//Read
router.get("/users", async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ sucess: false, message: err.message });
  }
});

router.post("/user", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new userModel({ name, email, password });
    await newUser.save();
    res.status(200).json({
      success: true,
      user: newUser,
    });
  } catch (err) {
    res.status(500).json({ sucess: false, message: err.message });
  }
});
//DELETE
router.delete('/users/:id',async (req,res) =>{
    // console.log("updated");
    const {id} = req.params;
    try
    {
        const deleteuser = await userModel.findByIdAndDelete(id);
        if(!deleteuser)
            {
                res.send("not found");
            }
           res.status(200).json(
            {
                "success":true,
                "user":deleteuser
            })
    }
    catch (err) {
        res.status(500).json({ sucess: false, message: err.message });
      }
    
   
})
//PUSH

router.put('/users/:id',async (req,res) =>{
    // console.log("updated");
    const {id} = req.params;
    const {name,email,password} = req.body;
    try
    {
        const updateuser = await userModel.findByIdAndUpdate(id , {name,email,password});
        if(!updateuser)
            {
                res.send("add a user");
            }
           res.status(200).json(
            {
                "success":true,
                "user":updateuser
            })
    }
    catch (err) {
        res.status(500).json({ sucess: false, message: err.message });
      }
    
   
})

module.exports = router;
