import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Admin Page ");
});

module.exports=router;