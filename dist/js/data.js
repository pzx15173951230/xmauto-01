"use strict";

// 主页数据加载
define(["jquery"], function ($) {
  function download() {
    $.ajax({
      url: "../data/data.json",
      success: function success(arr) {
        //第一部分数据加载
        var firstData = arr[0];
        var node = $("<div class = 'home-banner-box'>\n                <a href=\"#\">\n                    <img src=\"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a2f39c9fe0804ace1d3707574c7c86f.jpg?thumb=1&w=1226&h=120&f=webp&q=90\" alt=\"\"/>\n                </a>\n            </div>\n            <div class = \"home-brick-box home-brick-row-2-box xm-plain-box\">\n                <div class = 'box-hd'>\n                    <h2 class = 'title'>".concat(firstData.title, "</h2>\n                    <div class = \"more\">\n                        <a href=\"#\" class = 'more-link'>\n                            \u67E5\u770B\u5168\u90E8\n                            <i class = 'iconfont iconfont-arrow-right-big'></i>\n                        </a>\n                    </div>\n                </div>\n                <div class = 'hox-bd clearfix'>\n                    <div class = 'row'>\n                        <div class = 'span4'>\n                            <ul class = 'brick-promo-list clearfix'>\n                                <li class = 'brick-item brick-item-l'>\n                                    <a href=\"#\">\n                                        <img src=\"").concat(firstData.img, "\" alt=\"\"/>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class = 'span16'>\n                            <ul class = 'brick-list clearfix'>\n                                \n                                \n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>"));
        node.appendTo(".page-main .container"); //通过循环将子元素进行创建

        for (var i = 0; i < firstData.childs.length; i++) {
          $("<li class = 'brick-item brick-item-m brick-item-m-2'>\n                        <a href=\"#\">\n                            <div class = 'figure figure-img'>\n                                <img width=\"160\" height=\"160\" src=\"".concat(firstData.childs[i].img, "\" alt=\"\"/>\n                            </div>\n                            <h3 class = 'title'>\n                                ").concat(firstData.childs[i].title, "\n                            </h3>\n                            <p class = 'desc'>").concat(firstData.childs[i].desc, "</p>\n                            <p class = 'price'>\n                                <span class = 'num'>").concat(firstData.childs[i].price, "</span>\n                                \u5143\n                                <span>\u8D77</span>\n                                ").concat(firstData.childs[i].del == 0 ? "" : "<del>" + firstData.childs[i].del + "元<del>", "\n                            </p>\n                        </a>\n                    </li>")).appendTo(node.find(".hox-bd .span16 ul"));
        } //后续部分数据加载


        for (var i = 1; i < arr.length; i++) {
          var node2 = $("<div class = 'home-banner-box'>\n                        <a href=\"#\">\n                            <img src=\"".concat(arr[i].topImg, "\" alt=\"\"/>\n                        </a>\n                    </div>\n                    <div class = 'home-brick-box home-brick-row-2-box xm-plain-box'>\n                        <div class = 'box-hd clearfix'>\n                            <h2 class = 'title'>").concat(arr[i].title, "</h2>\n                            <div class = 'more'>\n                                <ul class = 'tab-list'>\n                                    <li class = 'tab-active'>\n                                        \u70ED\u95E8\n                                    </li>\n                                    <li>\n                                        ").concat(arr[i].subTitle, "\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class = 'box-bd'>\n                            <div class = 'row'>\n                                <div class = 'span4'>\n                                    <ul class = 'brick-promo-list clearfix'>\n                                        <li class = 'brick-item  brick-item-m'>\n                                            <a href=\"#\">\n                                                <img src=\"").concat(arr[i].leftChilds[0], "\" alt=\"\"/>\n                                            </a>\n                                        </li>\n                                        <li class = 'brick-item  brick-item-m'>\n                                            <a href=\"#\">\n                                                <img src=\"").concat(arr[i].leftChilds[1], "\" alt=\"\"/>\n                                            </a>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class = 'span16'>\n                                    <div>\n                                        <ul class = 'brick-list clearfix'>\n                                        </ul>\n                                    </div>\n                                    <div>\n                                        <ul class = 'brick-list clearfix hide'>\n                                            \n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>"));
          node2.appendTo(".page-main .container");
          var hotChilds = arr[i].hotChilds;

          for (var k = 0; k < hotChilds.length; k++) {
            $("<div>\n                            <li class = 'brick-item ".concat(k == 7 ? "brick-item-s" : "brick-item-m brick-item-m-2", "'>\n                                <a href=\"#\">\n                                    <div class = 'figure figure-img'>\n                                        <img width=\"160\" height=\"160\" src=\"").concat(hotChilds[k].img, "\" alt=\"\"/>\n                                    </div>\n                                    <h3 class = 'title'>").concat(hotChilds[k].title, "</h3>\n                                    <p class = 'desc'>").concat(hotChilds[k].desc, "</p>\n                                    <p class = 'price'>\n                                        <span class = 'num'>").concat(hotChilds[k].price, "</span>\u5143\n                                        ").concat(hotChilds[k].del == 0 ? "" : "<del><span class = 'num'>" + hotChilds[k].del + "</span>元</del>", "\n                                    </p>\n                                </a>\n                            </li>\n                        </div>")).appendTo(node2.find(".span16 .brick-list").eq(0));
          }

          $("<li class = 'brick-item brick-item-s'>\n                            <a href=\"#\">\n                                <div class = 'figure figure-more'>\n                                    <i class = 'iconfont iconfont-circle-arrow-right'></i>\n                                </div>\n                                <div class = 'more'>\n                                    \u6D4F\u89C8\u66F4\u591A\n                                    <small>\u70ED\u95E8</small>\n                                </div>\n                            </a>\n                        </li>").appendTo(node2.find(".span16 .brick-list").eq(0));
          var childs = arr[i].childs;

          for (var l = 0; l < childs.length; l++) {
            $("<div>\n                            <li class = 'brick-item ".concat(l == 7 ? "brick-item-s" : "brick-item-m brick-item-m-2", "'>\n                                <a href=\"#\">\n                                    <div class = 'figure figure-img'>\n                                        <img width=\"160\" height=\"160\" src=\"").concat(childs[l].img, "\" alt=\"\"/>\n                                    </div>\n                                    <h3 class = 'title'>").concat(childs[l].title, "</h3>\n                                    <p class = 'desc'>").concat(childs[l].desc, "</p>\n                                    <p class = 'price'>\n                                        <span class = 'num'>").concat(childs[l].price, "</span>\u5143\n                                        ").concat(childs[l].del == 0 ? "" : "<del><span class = 'num'>" + childs[l].del + "</span>元</del>", "\n                                    </p>\n                                </a>\n                            </li>\n                        </div>")).appendTo(node2.find(".span16 .brick-list").eq(1));
          }

          $("<li class = 'brick-item brick-item-s'>\n                        <a href=\"#\">\n                            <div class = 'figure figure-more'>\n                                <i class = 'iconfont iconfont-circle-arrow-right'></i>\n                            </div>\n                            <div class = 'more'>\n                                \u6D4F\u89C8\u66F4\u591A\n                                <small>".concat(arr[i].subTitle, "</small>\n                            </div>\n                        </a>\n                    </li>")).appendTo(node2.find(".span16 .brick-list").eq(1));
        }
      }
    });
  } //通过事件委托添加切换函数


  function tabMenu() {
    $(".page-main .container").on("mouseenter", ".more .tab-list li", function () {
      $(this).addClass("tab-active").siblings("li").removeClass("tab-active"); //同时切换显示的商品内容

      $(this).closest(".home-brick-box").find(".box-bd .span16 div ul").addClass("hide").eq($(this).index()).removeClass("hide");
    });
  }

  return {
    download: download,
    tabMenu: tabMenu
  };
});