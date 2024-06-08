import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const { PATHS } = require('./util/constants.js');


const PORT=3000;

const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


//routing
//app.use("/kakaofriends", router);


//main;
const mainRouter=require('./controller/main.js');
app.use('/',mainRouter);


//productRouter
const productRouter=require('./controller/product.js');
app.use(PATHS.PRODUCT_ROUTE,productRouter);


//bestRouter
const bestRouter=require('./controller/best.js');
app.use(PATHS.BEST_ROUTE,bestRouter);


//categoryRouter
const categoryRouter=require('./controller/category.js');
app.use(PATHS.CATEGORY_ROUTE,categoryRouter);


//shoppingBasketRouter
const shoppingBasketRouter=require('./controller/shoppingBasket.js');
app.use(PATHS.SHOPPINGBASKET_ROUTE,shoppingBasketRouter);


//orderRouter
const orderRouter=require('./controller/order.js');
app.use(PATHS.ORDER_ROUTE,orderRouter);


//userRouter
const userRouter=require('./controller/user.js');
app.use(PATHS.USER_ROUTE,userRouter);


//adminRouter
const adminRouter=require('./controller/admin.js');
app.use(PATHS.ADMIN_ROUTE,adminRouter);





// app.get("/asdf/:categoryId", (req, res) => {
//      const qu=req.params;
//      console.log(qu.categoryId);

//     const q=req.query;
//     console.log(q.q);
//     console.log(q.name);
//     console.log(q.age);

    
//     res.json({"Category Page ": q.name});
// });





// /api 경로에 대한 GET 요청 처리
app.get('/api', (req, res) => {

  
    // // 응답으로 보낼 데이터
    // const responseData =  htmlToJson(htmlData);

    // // JSON 형식으로 응답을 보냄
    // res.send(responseData);
    // console.log(responseData);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


//


