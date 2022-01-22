const express = require("express");
const cors = require("cors");
const router = require("./router");

const app = express();

app.use(cors()); //跨域请求需要

app.use("/public", express.static("public")); //建立public资源供html等申请访问，并挂载在public上

app.use(router);

app.listen(80, () => {
  console.log("running in the http://127.0.0.1:80");
});
