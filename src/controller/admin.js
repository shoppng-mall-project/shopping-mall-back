import express from "express";
import connection from "../util/mysqlConnection.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Admin Page ");
});

module.exports=router;