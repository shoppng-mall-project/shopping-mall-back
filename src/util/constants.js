// Paths
const PATHS = {
    BEST_ROUTE : '/best',
    CATEGORY_ROUTE : '/category',
    SHOPPINGBASKET_ROUTE : '/shoppingBasket',
    ORDER_ROUTE : '/order',
    USER_ROUTE : '/user',
    ADMIN_ROUTE : '/admin',
    PRODUCT_ROUTE: '/product'
  };


const PARAMS={
  PRODUCT_ID: "/:productId"
}
  

  // SQL query
  const SQL_QUERIES = {
    SELECT_PRODUCT : "SELECT * FROM PRODUCT_TB WHERE ID= ?",
    INSERT_USER: 'INSERT INTO users (username, email) VALUES (?, ?)'
  };


  //mysqlConnection
  const MYSQL_CONNECTION={
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '0000',
    DATABASE: 'shoppingmall'
  }


// ERROR Messages
const ERROR_MESSAGES = {
    MYSQL_CONNECTION_ERROR: 'MySQL 연결 오류가 발생했습니다.',
  };


  
  module.exports = { CATEGORY,CHARACTER_CATEGORY,PATHS, PARAMS,SQL_QUERIES, MYSQL_CONNECTION ,ERROR_MESSAGES};
  