import express from "express";
import connection from "../util/mysqlConnection.js";

const router = express.Router();

//https://store.kakao.com/kakaofriends/best?sort=WEEKLY_BEST
router.get("/", (req, res) => {
    const {sort}=req.query;

    switch(sort){
        case 'DAILY_BEST':
            res.send('DAILY_BEST');
            break;

        case 'MONTHLY_BEST':
            res.send('MONTHLY_BEST');
            break;

        case 'WEEKLY_BEST':
        default:
            res.send('WEEKLY_BEST');
            break;

    }
});


// user_tb 정보 가져오기 
router.get('/api/data', (req, res) => {
  connection.query('SELECT * FROM user', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});


module.exports=router;