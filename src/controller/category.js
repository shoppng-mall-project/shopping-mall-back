import express from "express";
import connection from "../util/mysqlConnection.js";

const router = express.Router();

//https://store.kakao.com/kakaofriends/category?groupId=178


router.get("/", (req, res) => {

    const { groupId } = req.query;

    switch (groupId) {

        case '160':
            res.send('160');
            break;

        case '178':
        default:
            res.send('178');
            break;
    }
});

function getNewProducts() {

}


//main Category
router.get("/:categoryName", (req, res) => {
    const { categoryName } = req.params;

    switch (categoryName) {
        case '리빙':
            res.send('리빙');
            break;

        case '잡화':
            res.send('잡화');
            break;

        case '토이':
            res.send('토이');
            break;

        case '문구':
            res.send('문구');
            break;

        case '디지털':
            res.send('디지털');
            break;

        case '여행/레저':
            res.send('여행/레저');
            break;

        case '의류':
            res.send('의류');
            break;

        case '식품':
            res.send('식품');
            break;
    }
});


//리빙
router.get("/:categoryName", (req, res) => {
    const { categoryName } = req.params;

    switch (categoryName) {
        case '차량용품':
            res.send('차량용품');
            break;

        case '주방용품':
            res.send('주방용품');
            break;

        case '패브릭':
            res.send('패브릭');
            break;

        case '컵/텀블러':
            res.send('컵/텀블러');
            break;

        case '생활소품':
            res.send('생활소품');
            break;

        case '미용/욕실용품':
            res.send('미용/욕실용품');
            break;
    }
});


//잡화
router.get("/:categoryName", (req, res) => {
    const { categoryName } = req.params;

    switch (categoryName) {
        case '파우치/지갑':
            res.send('파우치/지갑');
            break;

        case '패션소품':
            res.send('패션소품');
            break;

        case '가방':
            res.send('가방');
            break;

        case '신발':
            res.send('신발');
            break;

        case '시즌용품':
            res.send('시즌용품');
            break;
    }
});


//토이
router.get("/:categoryName", (req, res) => {
    const { categoryName } = req.params;

    switch (categoryName) {
        case '중형인형':
            res.send('중형인형');
            break;

        case '주방용품':
            res.send('주방용품');
            break;

        case '패브릭':
            res.send('패브릭');
            break;

        case '컵/텀블러':
            res.send('컵/텀블러');
            break;

        case '생활소품':
            res.send('생활소품');
            break;

        case '미용/욕실용품':
            res.send('미용/욕실용품');
            break;
    }
});



//문구
router.get("/:categoryName", (req, res) => {
    const { categoryName } = req.params;

    switch (categoryName) {
        case '필통/케이스':
            res.send('필통/케이스');
            break;

        case '스티커':
            res.send('스티커');
            break;

        case '필기구':
            res.send('필기구');
            break;

        case '노트/메모':
            res.send('노트/메모');
            break;

        case '데스크 소품':
            res.send('데스크 소품');
            break;

        case '달력/다이어리':
            res.send('달력/다이어리');
            break;
    }
});


//디지털
router.get("/:categoryName", (req, res) => {
    const { categoryName } = req.params;

    switch (categoryName) {
        case '충전용품':
            res.send('충전용품');
            break;

        case '휴대폰 액세서리':
            res.send('휴대폰 액세서리');
            break;

        case '소형가전':
            res.send('소형가전');
            break;

        case 'PC/노트북 액세서리':
            res.send('PC/노트북 액세서리');
            break;

        case '이어폰 액세서리':
            res.send('이어폰 액세서리');
            break;
    }
});


// 여행/레저
router.get("/:categoryName", (req, res) => {
    const { categoryName } = req.params;

    switch (categoryName) {
        case '레져':
            res.send('레져');
            break;

        case '여행':
            res.send('여행');
            break;

        case '물놀이':
            res.send('물놀이');
            break;
    }
});


//식품
router.get("/:categoryName", (req, res) => {
    const { categoryName } = req.params;

    switch (categoryName) {
        case '스낵':
            res.send('스낵');
            break;
    }
});


//의류
router.get("/:categoryName", (req, res) => {
    const { categoryName } = req.params;

    switch (categoryName) {
        case '남성':
            res.send('남성');
            break;

        case '여성':
            res.send('여성');
            break;
    }
});




//캐릭터 카테고리
router.get("/:characterCategoryName", (req, res) => {
    const { characterCategoryName } = req.params;

    switch (characterCategoryName) {
        case '춘식이':
            res.send('춘식이');
            break;

        case '라이언':
            res.send('라이언');
            break;

        case '어피치':
            res.send('어피치');
            break;

        case '무지':
            res.send('무지');
            break;

        case '튜브':
            res.send('튜브');
            break;

        case '프로도':
            res.send('프로도');
            break;

        case '네오':
            res.send('네오');
            break;

        case '제이지':
            res.send('제이지');
            break;

        case '콘':
            res.send('콘');
            break;

        case '죠르디':
            res.send('죠르디');
            break;

        case '니니즈':
            res.send('니니즈');
            break;

        case '팬심저격':
            res.send('팬심저격');
            break;
    }
});




module.exports = router;