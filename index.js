const express = require("express");
const cors = require("cors");
const session = require("express-session");
const router = require("./router/index");
const res = require("express/lib/response");

const app = express();

app.use(cors()); //跨域请求必须要加

app.use(
  session({
    secret: "这是私钥", //与cookieParser中的一致
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/public", express.static("public")); //建立public资源供html等申请访问，并挂载在public上

app.use(router);

app.listen(12345, () => {
  console.log("running in the http://127.0.0.1:12345");
});
