// Author: Anton Nedilko

function prop(){
    this.prop={};
    this.init=function(x){
      this.prop=x;
    }
    this.split=function(s){
      var x=s.split('/'),x1=[];
      for(var j1 in x){
        if(j1.trim()!=""){
          x1.push(j1);
        }
      }
      return x1;
    }
    
    
    this.setprop=function(x,v){
      var d1=this.prop, x1=this.split(x),l=x1.length,c=0;
      for(var j1 in x1){
        if(c<x1-1){
          if(j1 in d1==false){
            d1[j1]={}
          }
          d1=d1[j1];
          c+=1;
        }else{
          d1[j1]=v;
        }
      }
    }
    
    this.getprop=function(x){
      var r,d1=this.prop,x1=this.split(x),l=x1.length,c=0;
      for(var j1 in x1){
        if(c<x1-1){
          if(j1 in d1==true){
            d1=d1[j1];
            c+=1;
          }else{
            break;
          }
        }else{
          if(j1 in d1==true){
            r=d1[j1];
          }
          break;
        }
      }
      return r;
    }
  }
