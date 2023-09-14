const express = require("express");
const Review = require("../models/Review");
const router = express.Router();

router.get("/test",(req,res)=>res.send("Testing...."));

// Add review
// /api/reviews/add
router.post("/add",async(req,res)=>{
    const {deployable} = req.body;
    try {
        const newDeployable = new Review({deployable});
        const review = await newDeployable.save();
        res.status(200).json(review);

    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
})


module.exports = router;