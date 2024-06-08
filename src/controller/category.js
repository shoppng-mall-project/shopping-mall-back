import express from "express";
import connection from "../util/mysqlConnection.js";

const router = express.Router();

//https://store.kakao.com/kakaofriends/category?groupId=178

router.get("/", (req, res) => {

    const {groupId}=req.query;

    switch(groupId){
        case '178':
            res.send('178');
            break;

        case '160':
            res.send('160');
            break;

        default: 
            res.send("category page");
            break;
    }

    //res.json({"Category Page ": categoryId});
});

router.get('/',(req,res)=>{
    res.send('asdf');
})


module.exports=router;