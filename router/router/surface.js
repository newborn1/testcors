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
    if (!req.session.islogin) {
      /*第一次请求时,保存一条用户信息*/
      req.session.user = {
        name: "Zheng-wx",
        age: "20",
        address: "st",
      };
      req.session.islogin = true;
      req.session.visitTime = 0; //访问次数,Edge的有点奇怪，访问一次请求了三次？
      req.session.start = Date.now();
      return res.send("你还没登录,已经获得session,再次刷新即可！");
    }

    const url = req.url;
    req.session.visitTime++;
    // if (err) {
    //   return req.send(`<h1>${url}错误<h1>`);
    // }
    FunctionApi.htmlApi(req, res);
    const session = req.session;
    if (req.session.visitTime === 3) {
      console.log(Date.now(), Date.now() - seq.session.start);
      req.session.destroy(); //最后要销毁
    }
    console.log(session); //这里不能再发消息，一次请求只能一次响应
  }
);

module.exports = router;
