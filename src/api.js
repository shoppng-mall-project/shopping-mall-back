import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Home Page ");
});


//=============================================================

//https://store.kakao.com/kakaofriends/best?sort=WEEKLY_BEST
router.get("/best", (req, res) => {
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



//=====================================================


router.get("/category", (req, res) => {

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



// 내부 API 엔드포인트
router.get('/category/data', (req, res) => {
    // 내부 데이터 로직 수행
    const data = {
      message: 'This is data from internal API'
    };
    // 데이터를 클라이언트로 전송
    res.json(data);
  });


// router.post("/category/:categoryId", (req, res) => {
//     const b=req.body;
//     console.log(b);
//     res.json({"Category Page ": q.categoryId});
// });

//=========================================================
router.get("/login", (req, res) => {
    res.send("login Page ");
});


//https://buy.kakao.com/shopping-front/order-store/list?channel=STORE
router.get("/order", (req, res) => {
    res.send("order Page ");
});


//https://buy.kakao.com/shopping-front/store/cart?channel=STORE
router.get("/cart", (req, res) => {
    res.send("cart Page ");
});

export default router;
