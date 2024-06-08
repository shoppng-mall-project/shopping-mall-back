import express from "express";

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


module.exports = router;