import express from "express";
import connection from "../util/mysqlConnection.js";
import htmlToJsonConverter from "../util/htmlToJsonConverter.js";
import { SQL_QUERIES ,PARAMS} from "../util/constants.js";

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('product');
})


// 경로가 /product/:productId 일 때 
router.get(PARAMS.PRODUCT_ID, (req, res) => {
    const productId= req.params.productId;

    getProductInformation(productId,(results)=>{
        results[0].description=htmlToJsonConverter.htmlToJson(results[0].description);
        res.json(results);
    });
});


//productId에 해당하는 DATA 가져오기
function getProductInformation(productId, callback){
    connection.query(SQL_QUERIES.SELECT_PRODUCT, [productId], (error, results)=>{
        if(error) throw error;
        callback(results); 
    });
}


module.exports=router;

