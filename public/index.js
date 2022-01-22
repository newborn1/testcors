var element = document.querySelector(".clock");

window.setInterval(() => {
  element.innerHTML = (() => {
    var now = new Date();
    var nowtime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    return nowtime;
  })();
}, 1000);

window.onload = () => {
  alert("session总的有效期是10s,且最多访问3次");
};
