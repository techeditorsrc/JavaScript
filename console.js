// function isDictionary(x){
//   return typeof x === "object" && !Array.isArray(x);
// }

function get(id){
  return document.getElementById(id);  
}

var console,br="<br \>",msg={"text":""}
function html(id,text,append){
  var x=get(id);
  if(x){
    if(!append){
      x.innerHTML=text;  
    }else{
      x.innerHTML+=text;
    }
  }else{
    var msg="Can't find id["+id+"]";
    console.innerHTML+=br+msg;
  }
}

function initConsole(id){
  console=get(id);
}

function print(text,append){
  html(console,text,append);
}

function clearConsole(){
  console.innerHTML=""; 
}
