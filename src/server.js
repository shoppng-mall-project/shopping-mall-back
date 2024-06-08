import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./api";  
import mysql from "mysql";


// MySQL 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0000',
  database: 'shoppingmall'
});


const PORT=3000;

const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

// MySQL 연결
connection.connect();


//main
const mainRouter=require('./main.js');
app.use('/',mainRouter);



//product
// app.get('/:type',(req,res)=>{
//   const q=req.params;

//   switch(q.type){

//     case 'best':
//       res.send('best');
//       break;

//     case 'category':
//       res.send('category');
//       break;
//   }
// });


//bestRouter
const bestRouter=require('./best.js');
app.use('/best',bestRouter);


// //shoppingBasket
// const shoppingBasketRouter=require('./shoppingBasket.js');
// app.use('/shoppingBasket',shoppingBasketRouter);


// //orderApp
// const orderRouter=require('./order.js');
// app.use('/order',orderRouter);


// //userApp
// const userRouter=require('./user.js');
// app.use('/user',userRouter);


// //adminApp
// const adminRouter=require('./admin.js');
// app.use('/admin',adminApp);


//routing
//app.use("/kakaofriends", router);

// app.get("/asdf/:categoryId", (req, res) => {
//      const qu=req.params;
//      console.log(qu.categoryId);

//     const q=req.query;
//     console.log(q.q);
//     console.log(q.name);
//     console.log(q.age);

    
//     res.json({"Category Page ": q.name});
// });


// user_tb 정보 가져오기 
app.get('/api/data', (req, res) => {
    connection.query('SELECT * FROM user_tb', (error, results, fields) => {
      if (error) throw error;
      res.json(results);
    });
  });


// /api 경로에 대한 GET 요청 처리
app.get('/api', (req, res) => {
    // 응답으로 보낼 데이터
    const responseData = {
        title: 'This is data from the API endpoint'
    };

    // JSON 형식으로 응답을 보냄
    res.json(responseData);
    console.log(responseData);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

