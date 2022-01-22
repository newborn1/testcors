const express = require("express");
const FunctionApi = require("../../haddleapi/index"); //导入函数类

const router = express.Router();

router.get(
  "/" || "/index.html",
  (req, res, next) => {
    if (req.url == "/") {
      req.url += "index.html";
      next();
    } //处理url格式
  },
  (err, req, res) => {
    const url = req.url;
    if (err) {
      return req.send(`<h1>${url}错误<h1>`);
    }
    FunctionApi.htmlApi();
  }
);

module.exports = {
  surface: router,
};
