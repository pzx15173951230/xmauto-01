"use strict";

define(['jquery', "jquery-cookie"], function ($) {
  function download() {
    var product_id = valueByName(location.search, "product_id");
    $.ajax({
      method: "get",
      url: "../data/goodsList.json",
      success: function success(arr) {
        //找到当前页面要加载的详情页面数据
        var goodsMsg = arr.find(function (item) {
          return item.product_id == product_id;
        });
        console.log(goodsMsg);
        var node = $(" <!-- \u5BFC\u822A -->\n                <div id = 'J_proHeader' data-name=\"".concat(goodsMsg.name, "\">\n                    <div class = 'xm-product-box'>\n                        <div id = 'J_headNav' class = 'nav-bar'>\n                            <div class = 'container J_navSwitch'>\n                                <h2 class = 'J_proName'>").concat(goodsMsg.name, "</h2>\n                                <div class = 'con'>\n                                    <div class = 'left'>\n                                        <span class = 'separator'>|</span>\n                                        <a href=\"#\">").concat(goodsMsg.title, "</a>\n                                    </div>\n                                    <div class = 'right'>\n                                        <a href=\"#\">\u6982\u8FF0</a>\n                                        <span class = 'separator'>|</span>\n                                        <a href=\"#\">\u53C2\u6570</a>\n                                        <span class = 'separator'>|</span>\n                                        <a href=\"#\">F\u7801\u901A\u9053</a>\n                                        <span class = 'separator'>|</span>\n                                        <a href=\"#\">\u7528\u6237\u8BC4\u4EF7</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- \u5546\u54C1\u8BE6\u60C5\u6570\u636E\u5C55\u793A -->\n                <div class = 'xm-buyBox' id = 'J_buyBox'>\n                    <div class = 'box clearfix'>\n                        <!-- \u5546\u54C1\u6570\u636E -->\n                        <div class = 'pro-choose-main container clearfix'>\n                            <div class = 'pro-view span10'>\n                                <!-- img-con fix \u8BBE\u7F6E\u56FE\u7247\u6D6E\u52A8 -->\n                                <div id = 'J_img' class = 'img-con' style = 'left: 338px; margin: 0px;'>\n                                    <div class = 'ui-wrapper' style=\"max-width: 100%;\">\n                                        <!-- \u56FE\u7247 -->\n                                        <div class = 'ui-viewport' style=\"width: 100%; overflow: hidden; position: relative; height: 560px;\">\n                                            <div id = 'J_sliderView' class = 'sliderWrap' style = 'width: auto; position: relative;'>\n   \n                                            </div>\n                                        </div>\n                                        <!-- \u663E\u793A\u7B2C\u51E0\u5F20\u56FE\u7247\u7684\u4E0B\u6807 -->\n                                        <div class = 'ui-controls ui-has-pager ui-has-controls-direction'>\n                                            <div class = 'ui-pager ui-default-pager'>\n                                                \n                                            </div>\n                                            <div class = 'ui-controls-direction'>\n                                                <a class=\"ui-prev\" href=\"\">\u4E0A\u4E00\u5F20</a>\n                                                <a class=\"ui-next\" href=\"\">\u4E0B\u4E00\u5F20</a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class = 'pro-info span10'>\n                                <!-- \u6807\u9898 -->\n                                <h1 class = 'pro-title J_proName'>\n                                    <span class = 'img'></span>\n                                    <span class = 'name'>").concat(goodsMsg.name, "</span>\n                                </h1>\n                                <!-- \u63D0\u793A -->\n\t\t\t\t\t\t\t\t<p class = 'sale-desc' id = 'J_desc'>\n                                    ").concat(goodsMsg.product_desc_ext, "\n                                </p>\n                                <div class = 'loading J_load hide'>\n                                    <div class = 'loader'></div>\n                                </div>\n                                <!-- \u4E3B\u4F53 -->\n                                <div class = 'J_main'>\n                                    <!-- \u7ECF\u8425\u4E3B\u9898 -->\n                                    <p class = 'aftersale-company' id = 'J_aftersaleCompany' type = '1' desc = 'null'>\u5C0F\u7C73\u81EA\u8425</p>\n                                    <!-- \u4EF7\u683C -->\n                                    <div class = 'pro-price J_proPrice'>\n                                        <span class = 'price'>\n\t\t\t\t\t\t\t\t\t\t\t").concat(goodsMsg.price_max, "\u5143\n                                            <del>").concat(goodsMsg.market_price_max, "\u5143</del>\n                                        </span>\n                                        <span class=\"seckill-notic hide\"><em></em><i></i><span><span></span></span></span>\n                                    </div>\n                                    <!-- \u5E38\u6001\u79D2\u6740\u5012\u8BA1\u65F6 -->\n                                    <div class = 'pro-time J_proSeckill'>\n                                        <div class=\"pro-time-head\">\n                                            <em class=\"seckill-icon\"></em> \n                                            <i>\u79D2\u6740</i>\n                                            <span class=\"time J_seckillTime\">\u8DDD\u7ED3\u675F 03 \u65F6 24 \u5206 46 \u79D2</span>\n                                       </div>\n                                        <div class = 'pro-time-con'>\n                                            <span class = 'pro-time-price'>\n                                                \uFFE5\n                                                <em class = 'J_seckillPrice'>").concat(goodsMsg.price_min, "</em>\n                                                <del>\n                                                    \uFFE5\n                                                    <em class = 'J_seckillPriceDel'>").concat(goodsMsg.market_price_min, "</em>\n                                                </del>\n                                            </span>\n                                        </div>\n                                    </div>\n                                        <!-- \u5DF2\u7ECF\u9009\u62E9\u4EA7\u54C1 -->\n                                        <div class = 'pro-list' id = 'J_proList'>\n                                            <ul>\n                                                <li>").concat(goodsMsg.name, " ").concat(goodsMsg.value, "  \n                                                    <del>").concat(goodsMsg.market_price_min, "\u5143</del>  \n                                                    <span>  ").concat(goodsMsg.price_min, " \u5143 </span> \n                                                </li>\n                                                <li class=\"totlePrice\" data-name=\"seckill\">   \n                                                    \u79D2\u6740\u4EF7   \uFF1A").concat(goodsMsg.price_min, "\u5143  \n                                                </li>\n                                            </ul>\n                                        </div>\n                                        <!-- \u8D2D\u4E70\u6309\u94AE -->\n                                        <ul class=\"btn-wrap clearfix\" id=\"J_buyBtnBox\">     \n                                            <li>  \n                                                <a href=\"#\" class=\"btn btn-primary btn-biglarge J_login\" id = \"").concat(goodsMsg.product_id, "\">\u52A0\u5165\u8D2D\u7269\u8F66</a>  \n                                            </li>   \n                                            <li>  \n                                                <a href=\"goodsCar.html\" class=\"btn-gray btn-like btn-biglarge\"> \n                                                    <i class=\"iconfont default\"></i>\u67E5\u770B\u8D2D\u7269\u8F66 \n                                                </a>  \n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>"));
        node.insertAfter("#app div .header"); //找到详情页加载的图片

        var aImages = goodsMsg.images;

        if (aImages.length == 1) {
          $("<img class = 'slider done' \n                        src=\"".concat(aImages[0], "\" \n                        style=\"float: none; list-style: none; position: absolute; width: 560px; z-index: 0; display: block;\" \n                        alt=\"\"/>")).appendTo(node.find("#J_sliderView")); //隐藏上一张、下一张操作

          node.find(".ui-controls").hide();
        } else {
          for (var i = 0; i < aImages.length; i++) {
            $("<div class = 'ui-pager-item'>\n                                <a href=\"#\" data-slide-index = \"0\" class = 'ui-pager-link ".concat(i == 0 ? "active" : "", "'>1</a>\n                           </div>")).appendTo(node.find(".ui-pager"));
            $("<img class = 'slider done' \n                        src=\"".concat(aImages[i], "\" \n                        style=\"float: none; list-style: none; position: absolute; width: 560px; z-index: 0; display: ").concat(i == 0 ? "block" : "none", ";\" \n                        alt=\"\"/>")).appendTo(node.find("#J_sliderView"));
          }
        }
      },
      error: function error(msg) {
        console.log(msg);
      }
    });
  } //name1=value1&name2=value2&name3=value3 


  function valueByName(search, name) {
    var start = search.indexOf(name + "=");

    if (start == -1) {
      return null;
    } else {
      var end = search.indexOf("&", start);

      if (end == -1) {
        end = search.length;
      } //提取出想要键值对 name=value


      var str = search.substring(start, end);
      var arr = str.split("=");
      return arr[1];
    }
  } //添加轮播效果


  function banner() {
    //点击下方的小块，切换图片
    var iNow = 0; //默认让第一张图片显示

    var aBtns = null; //获取所有的小块

    var aImgs = null; //获取所有的图片

    var timer = null; //点击按钮完成切换 事件委托完成

    $("#app div").on("click", ".ui-controls .ui-pager .ui-pager-item a", function () {
      //注意这里获取的是当前点击的a标签父节点的下标
      iNow = $(this).parent().index();
      tab(); //阻止冒泡和默认行为

      return false;
    }); //自动进行切换

    timer = setInterval(function () {
      iNow++;
      tab();
    }, 3000); //添加鼠标移入移出

    $("#app div").on("mouseenter", "#J_img", function () {
      clearInterval(timer);
    });
    $("#app div").on("mouseleave", "#J_img", function () {
      timer = setInterval(function () {
        iNow++;
        tab();
      }, 3000);
    }); //添加上一张和下一张画面切换

    $("#app div").on("click", ".ui-prev,.ui-next", function () {
      if (this.className == 'ui-prev') {
        iNow--;

        if (iNow == -1) {
          iNow = 4;
        }
      } else {
        iNow++;
      }

      tab();
      return false;
    }); //切换方法

    function tab() {
      if (!aImgs) {
        aImgs = $("#J_img").find("img");
      }

      if (!aBtns) {
        aBtns = $("#J_img").find(".ui-controls .ui-pager .ui-pager-item a");
      }

      if (aImgs.size() == 1) {
        clearInterval(timer);
      } else {
        if (iNow == 5) {
          iNow = 0;
        }

        aBtns.removeClass("active").eq(iNow).addClass('active');
        aImgs.hide().eq(iNow).show();
      }
    }
  } //添加点击加入购物车操作


  $("#app div").on("click", ".J_login", function () {
    //获取当前的商品列表
    var id = this.id; //进行购物车操作   goods键，json格式字符串为值
    //1、先去判断cookie中是否存在商品信息

    var first = $.cookie("goods") == null ? true : false; //2、如果是第一次添加

    if (first) {
      //直接创建cookie
      var cookieStr = "[{\"id\":".concat(id, ",\"num\":1}]");
      $.cookie("goods", cookieStr, {
        expires: 7
      });
    } else {
      var same = false; //假设没有添加过
      //3、如果不是第一次添加，判断之前是否添加过

      var cookieStr = $.cookie("goods");
      var cookieArr = JSON.parse(cookieStr);

      for (var i = 0; i < cookieArr.length; i++) {
        if (cookieArr[i].id == id) {
          //如果之前添加过，数量+1
          cookieArr[i].num++;
          same = true;
          break;
        }
      }

      if (!same) {
        //如果没有添加过，新增商品数据
        var obj = {
          id: id,
          num: 1
        };
        cookieArr.push(obj);
      } //最后，存回cookie中


      $.cookie("goods", JSON.stringify(cookieArr), {
        expires: 7
      });
    }

    alert($.cookie("goods"));
  });
  return {
    download: download,
    banner: banner
  };
});