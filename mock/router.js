var express = require("express");
var router = express.Router();
var config = require("./config.js");
var homehot = require("./data/home/hotdata")
var searchData = require('./data/search')
var detailData = require('./data/details')
var commentData = require('./data/comment')
var orderComment = require('./data/order')
var url = require("url");

router.get(config.homehot1,function(req,res){
    var cityName = url.parse(req.url, true).query.city;
    console.log("Location: " + cityName)
    res.send(homehot.hot1)
})

router.get(config.homehot2,function(req,res){
    var cityName = url.parse(req.url, true).query.city;
    console.log("Location: " + cityName)
    res.send(homehot.hot2)
})

// search interface
router.get(config.search,function (req, res) {

    // request params: city, search content
    var cityName = url.parse(req.url, true).query.city;
    var searchContent = url.parse(req.url, true).query.content;
    var page = url.parse(req.url, true).query.page;
    console.log("城市："+cityName,"搜索内容："+searchContent,"页码："+page);
    res.send(searchData);
})

// details interface
router.get(config.detail,function (req, res) {
    // accept the item's id
    var id = url.parse(req.url, true).query.id;
    console.log("id : " + id);
    res.send(detailData);
})

// comment interface
router.get(config.comment, function (req, res) {
    // accept the item's id
    var id = url.parse(req.url, true).query.id;
    console.log("id : " + id);
    res.send(commentData);
})

// shopping cart
router.get(config.car,function (req, res) {
    var user = url.parse(req.url, true).query.user;
    console.log("User: " + user);
    res.send(orderComment)
})

// post comment
router.post(config.order,function (req, res) {
    var info = req.body.info;
    console.log("Comment: " + info);
    res.send({
        msg:"Comment Successfully"
    })
})

module.exports = router;