var out = document.querySelector(".slider-main");
var imgs = document.querySelector(".slider-pic").getElementsByTagName("img");
var x = 1;
var time1 = null;//控制一张图片滚动的步数
var time2 = null;//控制自动滚动

function move() {
  clearInterval(time1);
  var step = 0;
  var maxstep = 30;//每张图片分为30小步滚动
  var startpos = out.scrollLeft;//每次滚动前，out容器所在的位置
  var endpos = imgs[0].offsetWidth * x;//out容器应该滚动到的地方
  var every = (endpos - startpos) / maxstep;//out容器每一步滚动的距离

  time1 = setInterval(function () {
    step++;
    if(step >= maxstep) {
      clearInterval(time1);
      step = 0;
    }
    startpos += every;
    out.scrollLeft += startpos;
  },15);//没一小步间隔时间15ms
}
move();
