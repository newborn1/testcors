const express = require("express");
const FunctionApi = require("../../haddleapi/index"); //导入函数类

const router = express.Router();

router.get(
  /\/(index.html)?/, //利用正则表达式,且不能用双引号括起来
  (req, res, next) => {
    //对数据进行处理
    res.setHeader("Access-Control-Allow_Origin", "*"); //允许访问该资源的外域url,写*不能携带Cookies
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type,XContent-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "PUT, POST, GET, DELETE, OPTIONS"
    );
    if (req.method == "OPTIONS") {
      res.send(200); // 意思是，在正常的请求之前，会发送一个验证，是否可以请求。
    }
    // req.session = {
    //   user: req.body,
    //   islogin: true,
    // };
    if (req.url === "/") {
      req.url += "index.html";
    } //处理url格式
    next(); //next()要放在最后面,否者会停住动不了
  },
  (req, res) => {
    if (req.session.islogin) {
      /*第一次请求时,保存一条用户信息*/
      req.session = {
        user: {
          name: "Zheng-wx",
          age: "20",
          address: "st",
        },
        islogin: true,
      };
      res.render("index", {
        title: "the test for node.js session",
        name: "这是私钥", //不能省
      });
      return res.send("你还没登录！");
    }

    const url = req.url;
    // if (err) {
    //   return req.send(`<h1>${url}错误<h1>`);
    // }
    FunctionApi.htmlApi(req, res);
    const session = req.session;
    req.session.destroy();
    console.log(session); //这里不能再发消息，一次请求只能一次响应
  }
);

module.exports = router;
