//Author: Anton Nedilko
function vector3d(){
  this.vector=function(){
    var x=arguments,l=arguments.length;
    if(l==0){
      this.v=[0,0,0,0]
    }else if(l==1){
      if(Array.isArray(x[0])){
        this.v=[x[0][0],x[0][1],x[0][2],x[0][3]];
      }else{
        this.v=[x[0].v[0],x[0].v[1],x[0].v[2],x[0].v[3]];
      }
    }else if(l==4){
      this.v=[x[0],x[1],x[2],x[3]];
    }
  }
  this.v=[0,0,0,0];
  if(arguments.length==1){
    this.vector(arguments[0]);
  }else if(arguments.length==4){
    this.vector([arguments[0],arguments[1],arguments[2],arguments[3]])
  }
  this.add=function(a,b){
    var x=[0,0,0,0],y=[0,0,0,0];
    if(a){
      if(Array.isArray(a)){
        x=a;
      }else{
        x=a.v;
      }
      if(!b){
        for(var j=0;j<3;j++){
          this.v[j]+=x[j];
        }
        return this;
      }else{
        if(Array.isArray(b)){
          y=b;
        }else{
          y=b.v;
        }
        var result=new vector3d(x);
        return result.add(y);
      }
    }else{
      var result=new vector3d();
      return result;
    }       
  }
}
