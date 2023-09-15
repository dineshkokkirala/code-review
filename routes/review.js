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

// Get all reviews
// /api/reviews/all
router.get("/all",async(req,res)=>{
    try {
        const allReviews = await Review.find();
        res.status(200).json(allReviews);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
})

// Update review
// /api/reviews/edit/:id
router.put("/edit/:id",async(req,res)=>{
    const {updateRequestId} = req.body;
    const {id} = req.params;
    try {
        let review = await Review.findOne({_id:id});
        //console.log(review);
        review.status = updateRequestId;
        //console.log(updateRequestId)
        review = await Review.findByIdAndUpdate(id,{$set:review},{new:true});
        res.json(review);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
})

// Delete Review
// /api/reviews/delete/:id
router.delete("/delete/:id",async(req,res)=>{
    const {id} = req.params;
    try {
        await Review.findByIdAndRemove(id);
        res.json({msg:"Review Deleted"});
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
})


module.exports = router;