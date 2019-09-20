// pages/calc/calc.js
var calculate = function (data1, oper, data2) {
  var data;
  data1 = parseFloat(data1);
  data2 = parseFloat(data2);
  switch (oper) {
    case "+":
      data = data1 + data2;
      break;
    case "-":
      data = data1 - data2;
      break;
    case "×":
      data = data1 * data2;
      break;
    case "÷":
      if (data2 !== 0) {
        data = data1 / data2;
      } else {
        data = 0;
      }
      break;
  }
  return data;
}

var saveExprs = function (expr) {
  var exprs = wx.getStorageSync("exprs") || [];
  exprs.unshift(expr);
  wx.setStorageSync('exprs', exprs);
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    temp: "0",
    lastoper: "+",
    flag: true,
    result: "0",
    id1: "history",
    id2: "clear",
    id3: "back",
    id4: "div",
    id5: "num_7",
    id6: "num_8",
    id7: "num_9",
    id8: "mul",
    id9: "num_4",
    id10: "num_5",
    id11: "num_6",
    id12: "sub",
    id13: "num_1",
    id14: "num_2",
    id15: "num_3",
    id16: "add",
    id17: "negative",
    id18: "num_0",
    id19: "dot",
    id20: "equ",
    record: true,
    expr: ""
  },
  clickButton: function (e) {
    var data = this.data.result;
    var tmp = this.data.temp;
    var lastoper1 = this.data.lastoper;
    var noNumFlag = this.data.flag;
    var expr1 = this.data.expr;
    console.log("Previous: " + expr1)

    if (e.target.id >= "num_0" && e.target.id <= "num_9") { // 判断是否按了数字键
      data += e.target.id.split("_")[1];
      if (this.data.result == "0" || noNumFlag) {
        data = e.target.id.split("_")[1];
      }
      noNumFlag = false;
    } else { // 不是数字键
      noNumFlag = true;
      console.log("OP Key: " + e.target.id);
      if (e.target.id == "dot") { // 小数点
        if (data.toString().indexOf(".") == -1) {
          data += ".";
        }
      } else if (e.target.id == "clear") { // 清除按钮
        expr1 = expr1.substr(0, expr1.length - 1) + "=" + tmp; // 删除最后的运算符
        // if (this.data.record) {
        //   console.log("Record Started!!!" + expr1)
        //   wx.setStorageSync("expr", expr1);
        // }
        saveExprs(expr1);
        expr1 = "";
        data = 0; // 数据清0
        tmp = 0; // 清除中间结果
        lastoper1 = "+";
      } else if (e.target.id == "negative") { // 数字取负
        data = -1 * data;
      } else if (e.target.id == "back") { // 回退一个字符
        if (data.toString().length > 1) {
          data = data.substr(1, data.toString().length - 1);
        } else {
          data = 0;
        }
      } else if (e.target.id == "div") { // 除法
        expr1 += data.toString() + "÷";
        data = calculate(tmp, lastoper1, data);
        tmp = data;
        lastoper1 = "÷";
      } else if (e.target.id == "mul") { // 乘法
        expr1 += data.toString() + "×";
        data = calculate(tmp, lastoper1, data);
        tmp = data;
        lastoper1 = "×";
      } else if (e.target.id == "add") { // 加法
        expr1 += data.toString() + "+";
        data = calculate(tmp, lastoper1, data);
        tmp = data;
        lastoper1 = "+";
      } else if (e.target.id == "sub") { // 减法
        expr1 += data.toString() + "-";
        data = calculate(tmp, lastoper1, data);
        tmp = data;
        lastoper1 = "-";
      } else if (e.target.id == "equ") { // 等号
        expr1 += data.toString();
        data = calculate(tmp, lastoper1, data);
        expr1 += "=" + data;
        // if (this.data.record) {
        //   console.log("Record Again!!!" + expr1)
        //   wx.setStorageSync("expr", expr1);
        //   console.log("Try: " + wx.getStorageSync("expr"))
        // }
        saveExprs(expr1);
        expr1 = "";
        tmp = 0;
        lastoper1 = "+";
      } else if (e.target.id == "history") {
        wx.navigateTo({
          url: '../history/history',
        })
      }
    }
    this.setData({
      result: data,
      lastoper: lastoper1,
      temp: tmp,
      flag: noNumFlag,
      expr: expr1
    });
  },
  RecordHistory: function (e) {
    console.log("RecordHistory: " + e.detail.value);
    this.setData({
      record: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})