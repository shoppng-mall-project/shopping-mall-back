import express from "express";
import connection from "./mysqlConnection.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Order Page ");
});

module.exports=router;