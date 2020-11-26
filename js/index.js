"use strict";

var dlzc = document.getElementById("dlzc");
var login = document.querySelector(".login");
var logInner = document.querySelector(".login-inner");

dlzc.onclick = function () {
  login.style.display = "block";
  logInner.style.display = "block";
};

var xx = document.querySelector(".login-xx");

xx.onclick = function () {
  login.style.display = "none";
  logInner.style.display = "none";
};
/* var showTime = document.querySelector('.flashsale-countdown');
//结束日期
var endDate = new Date("2020/11/24 10:53:40");
//当前时间
var nowDate = new Date();
//时间差
var s = parseInt(getDifTime(nowDate,endDate));

if(hour < 14){
    afterDate.setHours(14);
    $(".flashsale-countdown .round").html("14:00 场");
    
}else if(hour >= 14 && hour < 22){
    afterDate.setHours(22);
    $(".flashsale-countdown .round").html("22:00 场");
}else{
    $(".flashsale-countdown .round").html("明日14:00 场");
    afterDate.setHours(14);
    afterDate.setDate(date + 1);
}
//初始化页面内容。
init(s);

function init(s){
    if(s <= 0){
        showTime.innerHTML = "商品活动时间已结束";
        return;
    }
    //根据时间差的秒数来计算天，时，分，秒
    var hours = s / 60 / 60;
    //console.log(d);
    //hours/24:1.9791626041666666
    var d = parseInt(hours/24);
    var h = parseInt((hours/24 - d) * 24);
    var f = parseInt(((hours/24 - d) * 24 - h) * 60);
    var m = parseInt((((hours/24 - d) * 24 - h) * 60 - f) * 60);
    
    showTime.innerHTML = "距离商品活动结束还剩"+d+"天" + h + "时"+f+"分"+m+"秒";
}


//定时器控制秒

var timer = setInterval(function(){
    s--;
    console.log(s);
    if(s <= 0){
        showTime.innerHTML = "商品活动时间已结束";
        //清除定时器
        clearInterval(timer);
        return;
    }
    init(s);
},1000);
 */