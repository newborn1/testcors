const express = require("express");
const cors = require("cors");
const session = require("express-session");
const router = require("./router/index");

const app = express();

app.use(cors()); //跨域请求必须加

app.use(
  session({
    secret: "这是私钥", //与cookieParser中的一致
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 10, //有效期单位ms
      // maxAge: 1000 * 60 * 60, // default session expiration is set to 1 hour
    },
  })
);

app.use("/public", express.static("public")); //建立public资源供html等申请访问，并挂载在public上

app.use(router);

app.listen(12345, () => {
  console.log("running in the http://127.0.0.1:12345");
});
