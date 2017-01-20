//index.js
var index = require('../../data/data_index.js');
var index_lower = require('../../data/data_indexlower.js');
//获取应用实例
var app = getApp()
Page({
  data: {
    feed:[],
    id:0
  },
  onLoad: function () {
    var that = this;
    this.refresh();
  },
  refresh:function(){
    var feeds = index.index;
    var feed_data = feeds.data;
    this.setData({
      feed:feed_data,
      id:feeds.id
    });
  },
  loading_lower:function(){
    var feeds_lower = index_lower.index_lower;
    var feed_lower_data = feeds_lower.data;
    this.setData({
      feed:this.data.feed.concat(feed_lower_data)
    });
  },
  lower:function(){
    wx.showNavigationBarLoading();
    this.loading_lower();
    console.log(123);
    setTimeout(function(){
      wx.hideNavigationBarLoading()
    },2000);
  }
})
