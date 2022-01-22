const express = require("express");
const FunctionApi = require("../../haddleapi/index"); //导入函数类

const router = express.Router();

router.get(
  // /^\/(?(?:([^\/]+?))\.html)?\/?$/,
  /\/(index.html)?/, //利用正则表达式,且不能用双引号括起来
  (req, res, next) => {
    if (req.url === "/") {
      req.url += "index.html";
    } //处理url格式
    next(); //next()要放在最后面,否者会停住动不了
  },
  (req, res) => {
    const url = req.url;
    // if (err) {
    //   return req.send(`<h1>${url}错误<h1>`);
    // }
    FunctionApi.htmlApi(req, res);
  }
);

module.exports = router;
