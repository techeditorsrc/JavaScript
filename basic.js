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
  html(c_id,text,append); 
}
