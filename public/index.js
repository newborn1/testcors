var element = document.querySelector(".clock");

window.setInterval(() => {
  element.innerHTML = (() => {
    var now = new Date();
    var nowtime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    return nowtime;
  })();
}, 1000);
