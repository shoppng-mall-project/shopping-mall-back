import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Order Page ");
});

module.exports=router;