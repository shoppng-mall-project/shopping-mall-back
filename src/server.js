import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const { PATHS } = require('./constants.js');


const PORT=3000;

const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


//routing
//app.use("/kakaofriends", router);


//main;
const mainRouter=require('./main.js');
app.use('/',mainRouter);


//bestRouter
const bestRouter=require('./best.js');
app.use(PATHS.BEST_ROUTE,bestRouter);


//categoryRouter
const categoryRouter=require('./category.js');
app.use(PATHS.CATEGORY_ROUTE,categoryRouter);


//shoppingBasketRouter
const shoppingBasketRouter=require('./shoppingBasket.js');
app.use(PATHS.SHOPPINGBASKET_ROUTE,shoppingBasketRouter);


//orderRouter
const orderRouter=require('./order.js');
app.use(PATHS.ORDER_ROUTE,orderRouter);


//userRouter
const userRouter=require('./user.js');
app.use(PATHS.USER_ROUTE,userRouter);


//adminRouter
const adminRouter=require('./admin.js');
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

  const cheerio = require('cheerio');

  function htmlToJson(html) {
      const $ = cheerio.load(html);
      
      const jsonData = {
          blocks: []
      };
  
      // 각 <p> 태그를 반복하면서 데이터를 추출
      $('p').each((index, element) => {
          const type = $(element).find('img').length > 0 ? 'image' : 'paragraph';
          const text = $(element).text().trim();
          const imgSrc = $(element).find('img').attr('src');
  
          const data = {
              type: type,
              data: {}
          };
  
          if (type === 'paragraph') {
              data.data.text = text;
          } else {
              data.data.file = {
                  url: imgSrc
              };
          }
  
          jsonData.blocks.push(data);
      });
  
      return jsonData;
  }
  
  // 테스트
  const htmlData = `<div>
   
   
    <p><strong>킹받는 귀여움에 춘며들어뤂!<br> 잔망루피와 춘식이의 만남🩷😺</strong></p> 
    <p>다들 주목할 소장욕구 최강 조합🌟<br> 잔망루피와 춘식이가 짝꿍이 되어 찾아왔어요.</p> 
    <div class="cu-video"> 
     <div class="cu-video-aspect-ratio"> <iframe frameborder="0" src="https://tv.kakao.com/embed/player/cliplink/446587939"></iframe> 
     </div> 
    </div> 
    <p>함께하면 귀여움이 두 배💫<br> 잔망루피X카카오프렌즈 춘식이 주차번호판을 소개합니다.</p> 
    <p><!-- Not Allowed Attribute Filtered ( class="__cu_imgsize_1280_900") --><img src="https://st.kakaocdn.net/thumb/R890x0/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Feditor%2F20240507162449_a0c00e23eec04f49902c68cfa8bf98e0.jpg"></p> 
    <p>춘식이 머리 위로 ✌️-!<br> 잔망력 넘치는 루피와 사랑스러운 춘식이🩷</p> 
    <p><!-- Not Allowed Attribute Filtered ( class="__cu_imgsize_1280_900") --><img src="https://st.kakaocdn.net/thumb/R890x0/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Feditor%2F20240507162450_4d27855375c946cba67130389b813a54.jpg"></p> 
    <p>운전하며 볼 수 있는 치명적인 뒤태✨</p> 
    <p><!-- Not Allowed Attribute Filtered ( class="__cu_imgsize_1280_900") --><img src="https://st.kakaocdn.net/thumb/R890x0/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Feditor%2F20240507162450_23c89644b7274a2ea7cfa758f70fc8a4.jpg"></p> 
    <p>급한 용건이 있다면!<br> 아래 번호로 연락하라냥🐱</p> 
    <p><!-- Not Allowed Attribute Filtered ( class="__cu_imgsize_1280_900") --><img src="https://st.kakaocdn.net/thumb/R890x0/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Feditor%2F20240507162450_3e0e53718179421babc1520113306c3c.jpg"></p> 
    <p>차량에 부착 전 핸드폰 번호를 하단에 하나씩 꽂아주세요.<br> 번호가 바뀌어도 걱정 없이 간단하게 바꿔주면 된답니다.😉</p> 
    <p><!-- Not Allowed Attribute Filtered ( class="__cu_imgsize_1280_900") --><img src="https://st.kakaocdn.net/thumb/R890x0/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Feditor%2F20240507162451_58d89622e3014a5eae5cf5cbf8194559.jpg"></p> 
    <p><!-- Not Allowed Attribute Filtered ( class="__cu_imgsize_1280_900") --><img src="https://st.kakaocdn.net/thumb/R890x0/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Feditor%2F20240507162450_393f3f8cb21949e39a5c8b82884a59ca.jpg"></p> 
    <p>차량 대시보드에 비치해 주면 끝!<br> 잔망루피&amp;춘식이와 렛츠 드라이브🚘</p> 
    <p><!-- Not Allowed Attribute Filtered ( class="__cu_imgsize_1280_900") --><img src="https://st.kakaocdn.net/thumb/R890x0/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Feditor%2F20240507162451_ab848520a7ac4e7a9ebaf5093511fe63.jpg"></p> 
    <p>귀여운 애 옆에 귀여운 애😉<br> 다른 잔망루피 콜라보 아이템도 구경해 봐요.💗</p> 
    <p><!-- Not Allowed Attribute Filtered ( class="__cu_imgsize_1280_960") --><img src="https://st.kakaocdn.net/thumb/R890x0/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Feditor%2F20240507162418_f65bd1a989814cb29f9cd1ac276ef453.jpg"><!-- Not Allowed Attribute Filtered ( class="__cu_imgsize_1280_960") --><img src="https://st.kakaocdn.net/thumb/R890x0/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Feditor%2F20240507162418_d7b7e16385dc43728d2da7b4d720073a.jpg"><!-- Not Allowed Attribute Filtered ( class="__cu_imgsize_1280_960") --><img src="https://st.kakaocdn.net/thumb/R890x0/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Feditor%2F20240507162418_dfe481b2778d477a906e5d85f9b6b798.jpg"><!-- Not Allowed Attribute Filtered ( class="__cu_imgsize_1280_960") --><img src="https://st.kakaocdn.net/thumb/R890x0/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Feditor%2F20240507162418_31dc91cd447f443f8e3c9309d7ebe9da.jpg"></p> 
    <p>- 재질/소재:&nbsp;PVC&nbsp;</p> 
    <p>- 구성품: 주차번호판 본품, 숫자칩 5세트</p>
   
  </div>`
  
  htmlToJson(htmlData);

  
    // 응답으로 보낼 데이터
    const responseData =  htmlToJson(htmlData);

    // JSON 형식으로 응답을 보냄
    res.send(responseData);
    console.log(responseData);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


//


