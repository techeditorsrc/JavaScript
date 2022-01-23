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
  this.add=function(a){
    for(var j=0;j<3;j++){
      this.v[j]+=a.v[j];
    }
    this.v[3]=a.v[3];
    return this;
  }
  this.sub=function(a){
    for(var j=0;j<3;j++){
      this.v[j]-=a.v[j];
    }
    this.v[3]=a.v[3];
    return this;      
  }
  this.mul=function(a){
    for(var j=0;j<3;j++){
      this.v[j]*=a.v[j];
    }
    this.v[3]=a.v[3];
    return this;      
  }    
   this.scale=function(a){
    for(var j=0;j<3;j++){
      this.v[j]*=a;
    }
    this.v[3]=a.v[3];
    return this;      
  }
   this.len=function(){
    return Math.sqrt(this.v[0]*this.v[0]+this.v[1]*this.v[1]+this.v[2]*this.v[2]); 
  }
  this.unit=function(){
    var l=Math.sqrt(this.v[0]*this.v[0]+this.v[1]*this.v[1]+this.v[2]*this.v[2]);
    if(l>0){
      this.v[0]/=l;
      this.v[1]/=l;
      this.v[2]/=l;
    }
    return this;
  }
  this.dot=function(a){
    this.v[0]*a.v[0]+this.v[1]*a.v[1]+this.v[2]*a.v[2];
    return this;
  }
  this.cross=function(a){
    this.v[0]=this.v[1]*a.v[2]-this.v[2]*a.v[1];
    this.v[1]=this.v[2]*a.v[0]-this.v[0]*a.v[2];
    this.v[2]=this.v[0]*a.v[1]-this.v[1]*a.v[0];
    return this;
  }
  return this;
}
