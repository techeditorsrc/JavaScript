// Author: Anton Nedilko

function get(id){
  return document.getElementById(id); 
}

function html(id,text,append){
  if(!append){
    id.innerHTML=text; 
  }else{
    id.innerHTML+=text; 
  }
}

var c_id;
function init_console(id){
  c_id=get(id); 
}
con=function(text,append){
  if(id){
    html(c_id,text,append);
  }
}

function timerobj(){
  this.c=0;
  this.x="";
  var me=this;
  this.update=function(){
    con(me.c);
    this.c+=1;
  }
  this.set=function(){
    this.x=setInterval(function(){
      me.update();
    },123);
  }
}

