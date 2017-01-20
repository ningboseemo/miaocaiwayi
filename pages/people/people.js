var people = require("../../data/data_people.js")

Page({
    data:{
        search:true,
        people:[],
        peopletuijian:[]
    },
    searchshow:function(){
        this.setData({
            search:false
        })
    },
    searchhide:function(){
        this.setData({
            search:true
        })
    },
    onLoad:function(){
        var that = this;
        this.refresh();
    },
    refresh:function(){
        var peoples = people.people;
        var peopleData = peoples.data;
        console.log(peopleData);
        var tuijian = [{
			"people_id":0,
			"people_photo":"../../images/7.jpg",
			"people":"财税工作者",
			"people_collect":true,
			"people_name":"黄玮琼"
		},
		{
			"people_id":1,
			"people_photo":"../../images/8.jpg",
			"people":"财税工作者",
			"people_collect":false,
			"people_name":"远道"
		},
		{
			"people_id":2,
			"people_photo":"../../images/9.jpg",
			"people":"财税工作者",
			"people_collect":false,
			"people_name":"高云"
		},
		{
			"people_id":3,
			"people_photo":"../../images/10.jpg",
			"people":"财税工作者",
			"people_collect":true,
			"people_name":"朱瑜翔 房地产税务咨询"
		}];
        this.setData({
            people:peopleData,
            peopletuijian:tuijian
        })
    },
gztoggle:function(e){
    var id = e.currentTarget.dataset.id;
    var list = this.data.peopletuijian;
    list[id].people_collect = !list[id].people_collect;
    this.setData({
        peopletuijian:list
    });
  },
pptoggle:function(e){
    var id = e.currentTarget.dataset.id;
    var list = this.data.people;
    list[id].people_collect = !list[id].people_collect;
    this.setData({
        people:list
    });
  }
})