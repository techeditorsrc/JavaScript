//Author: Anton Nedilko
  function vector3d(){
    this.vector=function(){
      var x=arguments,l=x.length;
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
    this.copy=function(){
      return new vector3d(this);
    }  
    this.add=function(a){
      this.v[0]+=a.v[0];
      this.v[1]+=a.v[1];
      this.v[2]+=a.v[2];
      return this;
    }
    this.sub=function(a){
      this.v[0]-=a.v[0];
      this.v[1]-=a.v[1];
      this.v[2]-=a.v[2];
      return this;      
    }
    this.mul=function(a){
      this.v[0]*=a.v[0];
      this.v[1]*=a.v[1];
      this.v[2]*=a.v[2];
      return this;      
    }    
    this.scale=function(a){
      this.v[0]*=a;
      this.v[1]*=a;
      this.v[2]*=a;
      return this;      
    }
    this.len=function(){
      return Math.sqrt(this.v[0]*this.v[0]+this.v[1]*this.v[1]+this.v[2]*this.v[2]); 
    }
    this.normalize=function(){
      var l=Math.sqrt(this.v[0]*this.v[0]+this.v[1]*this.v[1]+this.v[2]*this.v[2]);
      if(l>0){
        this.v[0]/=l;
        this.v[1]/=l;
        this.v[2]/=l;
      }
      return this;
    }
    this.dot=function(a){
      return this.v[0]*a.v[0]+this.v[1]*a.v[1]+this.v[2]*a.v[2];
    }
    this.cross=function(a){
      this.v[0]=this.v[1]*a.v[2]-this.v[2]*a.v[1];
      this.v[1]=this.v[2]*a.v[0]-this.v[0]*a.v[2];
      this.v[2]=this.v[0]*a.v[1]-this.v[1]*a.v[0];
      return this;
    }
    this.angle=function(a){
      var dot=this.v[0]*a.v[0]+this.v[1]*a.v[1]+this.v[2]*a.v[2],
          l1=Math.sqrt(this.v[0]*this.v[0]+this.v[1]*this.v[1]+this.v[2]*this.v[2]),
          l2=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]),
          l3=l1*l2;
      if(l3!=0){
        return Math.acos(dot/l3);
      }else{
        return 0;
      }
    }
    return this;
  }
  function v3d(a){
    if(a){
      return new vector3d(a);
    }else{
      return new vector3d();
    }
  }
  
  function matrix3d(){
    this.m=[[],[],[],[]];
    this.matrix=function(){
      var x=arguments,l=x.length;
      if(l==0){
        this.m=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
      }else if(l==1){
        if(Array.isArray(x[0])){
          for(var j2=0;j2<4;j2++){
            for(var j1=0;j1<4;j1++){
              this.m[j2][j1]=x[0][j2][j1];
            }
          }
        }else{
           for(var j2=0;j2<4;j2++){
            for(var j1=0;j1<4;j1++){
              this.m[j2][j1]=x[0].m[j2][j1];
            }
          }         
        }
      }else if(l==4){
        for(var j2=0;j2<4;j2++){
          for(var j1=0;j1<4;j1++){
            this.m[j2][j1]=x[j2][j1];
          }
        }       
      }
      return this;
    }
  }
  
  function m3d(){
    if(a){
      return new matrix3d(a);
    }else{
      return new matrix3d();
    }
  }
