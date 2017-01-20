
Page({
    data:{
        userHas:false,
        userinfo:{}
    },
    onLoad:function(){
        var that = this;
        if(this.data.userHas){
            wx.login({
              success: function(res){
                this._getuserInfo();
              },
              fail: function() {
                alert("登陆失败")
              }
            })
        }else{
            this._getuserInfo();
        }
    },
    _getuserInfo:function(){
        var that = this;
        wx.getUserInfo({
          success: function(res){
            that.setData({
                userHas:true,
                userinfo:res.userInfo
            });
            console.log(that.data.userinfo);
          }
        })
        
    }

})