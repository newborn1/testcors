const path = require("path");
const fs = require("fs");

module.exports.htmlApi = (req, res) => {
  //暴露接口不要写错
  const url = req.url;
  let fpath = "";
  const rootpaht = process.cwd(); //获得根目录
  fpath = path.join(rootpaht, "/webhtml/", url);
  fs.readFile(fpath, "utf-8", (err, dataStr) => {
    if (err) {
      return res.send("<h1>404 Not Found<h1>");
    }
    // dataStr += `<script type="text/javascript">window.onload = () => {
    //   alert("session的有效期是${Date.now() - req.session.start}s,且最多访问${
    //   3 - req.session.visitTime
    // }次"</script>);
    // };`.toString("utf-8");
    return res.send(dataStr);
  });
};
