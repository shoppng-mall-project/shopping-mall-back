import express from "express";
import connection from "../util/mysqlConnection.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Main Page ");
});

module.exports=router;