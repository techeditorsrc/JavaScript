//Author: Anton Nedilko
function timer(){
  var me=this;
  this.data=[];
  this.index=0;
  this.default_delay=25;
  this.delay=0;
  this.istimer=false;
  this.timer=undefined;
  
  //{"id":"","f":function(index){return true},"call":function(index){}}
  this.register=function(x){
    this.data.push(x);
  }
  
  this.call_register=function(){
    for(var x in this.data){
      if(this.data[x].f(this.index)){
        this.data[x].call(this.index);  
      }
    }
  }
  
  this.find_register=function(id){
     result=-1;
    for(var x in this.data){
      if(this.data[x].id==id){
        result=x;
        break;
      }
    }
    return result;
  }
  
  this.delete_register=function(id){
    var r=this.find_register(id);
    while(r!=-1){
      this.data.splice(r,1);
      r=this.find_register(id);
    }
  }
  
  this.update=function(index){
    this.call_register();
  }
  
  this.run=function(x){
    if(!x){
      this.delay=this.default_delay;  
    }else{
      this.delay=x;
    }
    this.index=0;
    this.istimer=true;
    this.timer=setInterval(function(){
      if(this.istimer){
        me.update(me.index);
        me.index+=1;
        if(me.index>=65536){
          me.index=0; 
        }
      }
    },this.delay);
  }
  
  this.pause=function(){
    if(this.istimer){
      this.istimer=false; 
    }
  }
  
  this.continue=function(){
    if(!this.istimer){
      this.istimer=true; 
    }
  }
  
  this.stop=function(){
    if(this.istimer){
      this.istimer=false;
      clearInterval(me.timer);
      this.index=0;
    }
  }
  
}

