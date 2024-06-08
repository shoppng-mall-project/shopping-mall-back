const express = require('express');
const app = express();

// 내부 API 엔드포인트
app.get('/api/data', (req, res) => {
    console.log('asdf');
  // 내부 데이터 로직 수행
  const data = {
    message: 'This is data from internal API'
  };
  // 데이터를 클라이언트로 전송
  res.json(data);
});

// 서버 실행
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


