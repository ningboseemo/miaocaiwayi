Page({
 data:{
     type:[{"typename":"增值税","typeactive":false},
            {"typename":"其它","typeactive":false},
            {"typename":"企业所得税","typeactive":false},
            {"typename":"个人所得税","typeactive":false},
            {"typename":"印花税","typeactive":false},
            {"typename":"稽查","typeactive":false},
            {"typename":"房产税，土地使用税","typeactive":false},
            {"typename":"土地增值税","typeactive":false},
            {"typename":"发票","typeactive":false}],
    selectedtype:[],
    select_show:false,
 },
 selectype:function(){
     this.setData({
         select_show:!this.data.select_show
     })
 },
 selected:function(e){
     var that = this;
     var id = e.currentTarget.dataset.id;
     var type_list = this.data.type;
     var selected_list = this.data.selectedtype;
     type_list[id].typeactive = !type_list[id].typeactive;
     console.log(id+' '+type_list[id].typename);
     this.setData({
         type:type_list
     });
    if(selected_list.length == 0){
        var selected_item = {"id_ed":id,"typename":type_list[id].typename};
        selected_list.push(selected_item);
        this.setData({
          selectedtype:selected_list
        });  
    }else{
        var t=0;
        for(var i=0;i<selected_list.length;i++){
            if(selected_list[i].id_ed == id){
                 console.log(i);
                 selected_list.splice(i,1);
                 this.setData({
                    selectedtype:selected_list
                    });
                t=1;
            }
        }
       if(t==0){
           var selected_item = {"id_ed":id,"typename":type_list[id].typename};
            selected_list.push(selected_item);
            this.setData({
            selectedtype:selected_list
            }); 
       }         
    }
 }
})