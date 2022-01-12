//Author: Anton Nedilko
function timer(){
  var me=this;
  this.data=[];
  this.index=0;
  this.default_delay=25;
  this.delay=0;
  this.istimer=false;
  this.timer=undefined;
  
  
  this.update=function(){
    if(this.istimer){
      this.index+=1;
    }
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
      me.update();
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
  
}

