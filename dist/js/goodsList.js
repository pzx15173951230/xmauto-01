"use strict";

define(["jquery"], function ($) {
  //数据下载和加载商品列表
  function download() {
    $.ajax({
      url: "../data/goodsList2.json",
      success: function success(arr) {
        //创建大图商品到页面上
        $("<div data-v-61428f58 class = 'section'>\n                <div data-v-61428f58 class = 'components-list-box'>\n                    <div data-v-a2d6c756 class=\"channel-product-imgText\">\n                        <div data-v-a2d6c756 class = 'channel-product-top'>\n                            <div data-v-a2d6c756 class = 'product-cell shadow product_with_tag product_tag_1'>\n                                <div data-v-a2d6c756 class = 'figure'>\n                                    <a href=\"goodsDesc.html?product_id=".concat(arr[0].product_id, "\">\n                                        <img data-v-a2d6c756 style = 'background-color: rgb(178, 184, 205);' src=\"").concat(arr[0].image, "\" alt=\"\"/>\n                                    </a>\n                                </div>\n                                <div data-v-a2d6c756 class = 'content'>\n                                    <h3 data-v-a2d6c756 class = 'title'>\n                                        <a data-v-a2d6c756 href=\"goodsDesc.html?product_id=").concat(arr[0].product_id, "\">\n                                            ").concat(arr[0].name, "\n                                        </a>\n                                    </h3>\n                                    <p data-v-a2d6c756 class = 'desc'>").concat(arr[0].desc, "</p>\n                                    <p data-v-a2d6c756 class = 'price'>\n                                        <strong data-v-a2d6c756>").concat(arr[0].price, "</strong>\u5143\n                                        <span data-v-a2d6c756>\u8D77</span>\n                                        <del data-v-a2d6c756>").concat(arr[0].del, "\u5143</del>\n                                    </p>\n                                    <p data-v-a2d6c756 class = 'link'>\n                                        <a data-v-a2d6c756 href=\"goodsDesc.html?product_id=").concat(arr[0].product_id, "\">\u7ACB\u5373\u8D2D\u4E70</a>\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- \u5206\u5272\u7EBF -->\n            <div data-v-61428f58 class = 'section'>\n                <div data-v-61428f58 class = 'components-list-box'>\n                    <div data-v-4a0c734d class = 'channel-line' style = 'background-color: rgb(245, 245, 245); height: 14px;'></div>\n                </div>\n            </div>")).appendTo(".page-main .app-body"); //创建小图商品
        //下载到的是一个商品列表数组

        for (var i = 1; i < arr.length; i++) {
          //重新计算下标
          //每两个商品创建一行
          if (i % 2 != 0) {
            var row = $("<div data-v-61428f58 class = 'section'>\n                        <div data-v-61428f58 class = 'components-list-box'>\n                            <div data-v-45ef62b1 class = 'channel-product channel-product-two4'>\n                                <div data-v-45ef62b1 class = 'row'>\n                                    \n                                </div>\n                            </div>\n                        </div>\n                    </div>");
            row.appendTo(".page-main .app-body");
          } //创建每一个商品添加到页面上


          $("<div data-v-45ef62b1 class = 'span10 product-cell shadow'>\n                        <div data-v-45ef62b1 class = 'figure'>\n                            <a data-v-45ef62b1 href=\"goodsDesc.html?product_id=".concat(arr[i].product_id, "\" class = 'exposure'>\n                                <img data-v-45ef62b1 style = 'background-color: rgb(189, 193, 217);' src=\"").concat(arr[i].image, "\" alt=\"\"/>\n                            </a>\n                        </div>\n                        <h3 data-v-45ef62b1 class = 'title'>\n                            <a data-v-45ef62b1 href=\"goodsDesc.html?product_id=").concat(arr[i].product_id, "\">").concat(arr[i].name, "</a>\n                        </h3>\n                        <p data-v-45ef62b1 class = 'desc'>").concat(arr[i].desc, "</p>\n                        <p data-v-45ef62b1 class = 'price'>\n                            <strong data-v-45ef62b1>").concat(arr[i].price, "</strong>\u5143\n                            <span data-v-45ef62b1>\u8D77</span>\n                            <del data-v-45ef62b1>").concat(arr[i].del, "\u5143</del>\n                        </p>\n                    </div>")).appendTo(row.find(".row"));
        }
      },
      error: function error(msg) {
        console.log(msg);
      }
    });
  } //实现页面上轮播图的切换效果


  function banner() {
    //获取页面上所有的图
    var oDiv = $(".swiper-container .swiper-wrapper"); //获取页面上所有的按钮

    var aBtns = $(".swiper-container .swiper-pagination a"); //设置当前显示图片的下标

    var iNow = 0;
    var timer = null;
    timer = setInterval(function () {
      iNow++;
      tab();
    }, 2000); //给当前页面添加移入移出效果

    $(".swiper-container").mouseenter(function () {
      clearInterval(timer);
    });
    $(".swiper-container").mouseleave(function () {
      timer = setInterval(function () {
        iNow++;
        tab();
      }, 2000);
    }); //给页面上指示当前图片下标的原点添加点击事件

    aBtns.click(function () {
      iNow = $(this).index();
      tab();
      return false;
    }); //切换函数

    function tab() {
      aBtns.removeClass("swiper-pagination-bullet-active").eq(iNow).addClass("swiper-pagination-bullet-active"); //如果是最后一张图片，设置第一个按钮显示被选中状态

      if (iNow == aBtns.size()) {
        aBtns.eq(0).addClass("swiper-pagination-bullet-active");
      }

      oDiv.animate({
        left: -2560 * iNow
      }, 1000, function () {
        //动画结束的时候判断，是否是最后一张图片
        if (iNow == aBtns.size()) {
          iNow = 0;
          oDiv.css("left", 0);
        }
      });
    }
  }

  return {
    download: download,
    banner: banner
  };
});