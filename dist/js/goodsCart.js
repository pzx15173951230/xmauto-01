"use strict";

define(["jquery", "jquery-cookie"], function ($) {
  //加载已经加入购物车的商品
  function loadCarData() {
    //清除上一次加载的结果
    $("#J_cartListBody .J_cartGoods").html(""); //通过promise取得，goodsList2.json和goodsCarList.json中的数据

    new Promise(function (resolve, reject) {
      $.ajax({
        url: "../data/goodsCarList.json",
        success: function success(obj) {
          //如果下载成功，把下载到数据中的商品列表传输过去
          resolve(obj.data);
        },
        error: function error(msg) {
          //如果下载错误，调用reject方法
          reject(msg);
        }
      });
    }).then(function (arr1) {
      // console.log(arr1);
      //下载第二份代码
      return new Promise(function (resolve, reject) {
        $.ajax({
          url: "../data/goodsList2.json",
          success: function success(arr2) {
            //将两份数据合并
            var newArr = arr1.concat(arr2);
            resolve(newArr);
          },
          error: function error(msg) {
            reject(msg);
          }
        });
      });
    }).then(function (arr) {
      //拿到服务器上，所有的商品数据，然后找出cookie中有的数据
      var cookieStr = $.cookie("goods");

      if (cookieStr) {
        var cookieArr = JSON.parse(cookieStr);
        var newArr = [];

        for (var i = 0; i < cookieArr.length; i++) {
          for (var j = 0; j < arr.length; j++) {
            if (cookieArr[i].id == arr[j].product_id || cookieArr[i].id == arr[j].goodsid) {
              arr[j].num = cookieArr[i].num; //设置商品id一致

              arr[j].id = arr[j].product_id ? arr[j].product_id : arr[j].goodsid;
              newArr.push(arr[j]);
            }
          }
        } //拿到加入购物车的所有数据，加载到页面上


        for (var i = 0; i < newArr.length; i++) {
          var node = $(" <div class=\"item-row clearfix\" id = ".concat(newArr[i].id, "> \n                        <div class=\"col col-check\">  \n                            <i class=\"iconfont icon-checkbox icon-checkbox-selected J_itemCheckbox\" data-itemid=\"2192300031_0_buy\" data-status=\"1\">\u221A</i>  \n                        </div> \n                        <div class=\"col col-img\">  \n                            <a href=\"//item.mi.com/").concat(newArr[i].id, ".html\" target=\"_blank\"> \n                                <img alt=\"\" src=\"").concat(newArr[i].image, "\" width=\"80\" height=\"80\"> \n                            </a>  \n                        </div> \n                        <div class=\"col col-name\">  \n                            <div class=\"tags\">   \n                            </div>     \n                            <div class=\"tags\">  \n                            </div>   \n                            <h3 class=\"name\">  \n                                <a href=\"//item.mi.com/").concat(newArr[i].id, ".html\" target=\"_blank\"> \n                                    ").concat(newArr[i].name, "\n                                </a>  \n                            </h3>        \n                        </div> \n                        <div class=\"col col-price\"> \n                            ").concat(newArr[i].price, "\u5143 \n                            <p class=\"pre-info\">  </p> \n                        </div> \n                        <div class=\"col col-num\">  \n                            <div class=\"change-goods-num clearfix J_changeGoodsNum\"> \n                                <a href=\"javascript:void(0)\" class=\"J_minus\">\n                                    <i class=\"iconfont\">\uE60B</i>\n                                </a> \n                                <input tyep=\"text\" name=\"2192300031_0_buy\" value=\"").concat(newArr[i].num, "\" data-num=\"1\" data-buylimit=\"20\" autocomplete=\"off\" class=\"goods-num J_goodsNum\" \"=\"\"> \n                                <a href=\"javascript:void(0)\" class=\"J_plus\"><i class=\"iconfont\">\uE609</i></a>   \n                            </div>  \n                        </div> \n                        <div class=\"col col-total\"> \n                            ").concat((newArr[i].price * newArr[i].num).toFixed(1), "\u5143 \n                            <p class=\"pre-info\">  </p> \n                        </div> \n                        <div class=\"col col-action\"> \n                            <a id=\"2192300031_0_buy\" data-msg=\"\u786E\u5B9A\u5220\u9664\u5417\uFF1F\" href=\"javascript:void(0);\" title=\"\u5220\u9664\" class=\"del J_delGoods\"><i class=\"iconfont\">\uE602</i></a> \n                        </div> \n                    </div> "));
          node.appendTo($("#J_cartListBody .J_cartGoods"));
        } //数据加载成功


        isCheckAll(); //计算总数
      }
    })["catch"](function (error) {
      console.log(error);
    });
  }

  function download() {
    $.ajax({
      url: "../data/goodsCarList.json",
      success: function success(obj) {
        var arr = obj.data;

        for (var i = 0; i < arr.length; i++) {
          $("<li class=\"J_xm-recommend-list span4\">    \n                    <dl> \n                        <dt> \n                            <a href=\"#\"> \n                                <img src=\"".concat(arr[i].image, "\" srcset=\"//i1.mifile.cn/a1/pms_1551867177.2478190!280x280.jpg  2x\" alt=\"\u5C0F\u7C73\u51C0\u6C34\u56681A\uFF08\u53A8\u4E0B\u5F0F\uFF09\"> \n                            </a> \n                        </dt> \n                        <dd class=\"xm-recommend-name\"> \n                            <a href=\"#\"> \n                                ").concat(arr[i].name, "\n                            </a> \n                        </dd> \n                        <dd class=\"xm-recommend-price\">").concat(arr[i].price, "\u5143</dd> \n                        <dd class=\"xm-recommend-tips\">   ").concat(arr[i].comments, "\u4EBA\u597D\u8BC4    \n                            <a class=\"btn btn-small btn-line-primary J_xm-recommend-btn\" href=\"#\" style=\"display: none;\" id = \"").concat(arr[i].goodsid, "\">\u52A0\u5165\u8D2D\u7269\u8F66</a>  \n                        </dd> \n                        <dd class=\"xm-recommend-notice\">\n\n                        </dd> \n                    </dl>  \n                </li>")).appendTo($("#J_miRecommendBox .xm-recommend ul.row"));
        }
      },
      error: function error(msg) {
        console.log(msg);
      }
    });
  } //全选按钮 和 单选按钮的点击实现


  function checkFunc() {
    $(".list-head .col-check").find("i").click(function () {
      var allChecks = $(".list-body").find(".item-row").find(".col-check i");

      if ($(this).hasClass("icon-checkbox-selected")) {
        $(this).add(allChecks).removeClass("icon-checkbox-selected");
      } else {
        $(this).add(allChecks).addClass("icon-checkbox-selected");
      }

      isCheckAll();
      return false;
    }); //给每一个商品的复选框设置

    $("#J_cartListBody .J_cartGoods").on("click", ".col-check i", function () {
      if ($(this).hasClass("icon-checkbox-selected")) {
        $(this).removeClass("icon-checkbox-selected");
      } else {
        $(this).addClass("icon-checkbox-selected");
      }

      isCheckAll();
      return false;
    });
  } //判断是否都被选中


  function isCheckAll() {
    var allChecks = $(".list-body").find(".item-row");
    var isAll = true;
    var total = 0;
    var count = 0; //记录被选中的数量

    var totalCount = 0; //记录总数

    allChecks.each(function (index, item) {
      if (!$(item).find(".col-check i").hasClass("icon-checkbox-selected")) {
        isAll = false;
      } else {
        total += parseFloat($(item).find(".col-price").html().trim()) * parseFloat($(item).find(".col-num input").val());
        count += parseInt($(item).find(".col-num input").val());
      }

      totalCount += parseInt($(item).find(".col-num input").val());
    }); //设置总价

    $("#J_cartTotalPrice").html(total);
    $("#J_selTotalNum").html(count);
    $("#J_cartTotalNum").html(totalCount); //判断是否全选

    if (isAll) {
      $(".list-head .col-check").find("i").addClass("icon-checkbox-selected");
    } else {
      $(".list-head .col-check").find("i").removeClass("icon-checkbox-selected");
    }
  } //给页面上商品数量增加减少和删除添加


  function changeCars() {
    //给每一个删除按钮添加事件
    $("#J_cartListBody .J_cartGoods").on("click", ".col-action .J_delGoods", function () {
      //删除页面上的数据，并且
      var id = $(this).closest(".item-row").remove().attr("id"); //在cookie中删除数据

      var cookieStr = $.cookie("goods");
      var cookieArr = JSON.parse(cookieStr);

      for (var i = 0; i < cookieArr.length; i++) {
        if (id == cookieArr[i].id) {
          //删除数据
          cookieArr.splice(i, 1);
          break;
        }
      }

      cookieArr.length == 0 ? $.cookie("goods", null) : $.cookie("goods", JSON.stringify(cookieArr), {
        expires: 7
      });
      isCheckAll();
      return false;
    }); //给每一个+和-添加事件

    $("#J_cartListBody .J_cartGoods").on("click", ".J_minus,.J_plus", function () {
      //1、先找出当前+和-按钮所在商品的id
      var id = $(this).closest(".item-row").attr("id"); //找出cookie

      var cookieStr = $.cookie("goods");
      var cookieArr = JSON.parse(cookieStr);

      for (var i = 0; i < cookieArr.length; i++) {
        if (cookieArr[i].id == id) {
          //说明该用户找到了
          if (this.className == "J_minus") {
            //数量-1
            cookieArr[i].num == 1 ? alert("数量已经为1，不能再减少！") : cookieArr[i].num--;
          } else {
            cookieArr[i].num++;
          }

          break;
        }
      } //更新页面上的数量


      $(this).siblings("input").val(cookieArr[i].num); //更新页面上的单个商品价格

      var price = parseFloat($(this).closest(".col-num").siblings(".col-price").html().trim());
      $(this).closest(".col-num").siblings(".col-total").html((price * cookieArr[i].num).toFixed(1) + "元"); //最后将更改后的数据存储到cookie中

      $.cookie("goods", JSON.stringify(cookieArr), {
        expires: 7
      }); //每次更改一次数据，重新计算一次总价

      isCheckAll();
      return false;
    });
  }

  function cartHover() {
    $("#J_miRecommendBox .xm-recommend ul.row").on("mouseenter", ".J_xm-recommend-list", function () {
      $(this).find(".xm-recommend-tips a").css("display", "block");
    });
    $("#J_miRecommendBox .xm-recommend ul.row").on("mouseleave", ".J_xm-recommend-list", function () {
      $(this).find(".xm-recommend-tips a").css("display", "none");
    }); //添加加入购物车操作

    $("#J_miRecommendBox .xm-recommend ul.row").on("click", ".J_xm-recommend-list a.btn", function () {
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
      } // alert($.cookie("goods"));


      loadCarData();
      return false;
    });
  }

  return {
    download: download,
    cartHover: cartHover,
    loadCarData: loadCarData,
    checkFunc: checkFunc,
    changeCars: changeCars
  };
});