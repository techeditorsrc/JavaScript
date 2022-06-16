/*
  Author: Anton Nedilko
   Email: arcs3567@gmail.com
  Source: https://github.com/techeditorsrc
    Info: 2D graphics engine (beta)
 License: GPL v3
*/
<canvas id='canvas'></canvas>
<div id="con"></div>

<script>
  function get(id){
    return document.getElementById(id);
  }
  var con=get("con");
  function print(x,y){
    if(!y){
      con.innerHTML=x;
    }else{
      con.innerHTML+=x;
    }
  }
  function event(obj,e,f,option_list){
    if(typeof f=='function'){
      var x=[];
      if(option_list){
        x=option_list;
      }
      obj.addEventListener.apply([e,f].concate(x));
    }else{
      if(!f){
        obj.removeEventListener(e,f);
      }
    }
  }

  var keys={},mouse={
    'button':false,
    'x':0,
    'y':0,
    'px':0,
    'py':0
  },canvas,ctx,width,height,options={},data={},
  timer=undefined,timer_delay=20,timer_index,timer_paused=true;
  init=function(){
    stop();
    data={};
  },
  run=function(){
    timer_paused=true;
    if(timer){
      clearInterval(timer);
    }
    timer_index=0;
    timer_paused=false;
    timer=setInterval(function(){
      if(!timer_paused){
        update(timer_index);
        timer_index++;
        if(timer_index>=1000){
          timer_index=0;
        }
      }
    },timer_delay);
  },
  pause=function(){
    timer_paused=true;
  },
  resume=function(){
    timer_paused=false;
  },
  update=function(index){},
  stop=function(){
    if(timer){
      timer_paused=true;
      clearInterval(timer);
      timer=undefined;
    }
  };
  function search_key(keycode){
    var r=false;
    for(var x in keys){
      if(keys[x]==keycode){
        r=true;
        break;
      }
    }
  }


  function print_keys(){
    print('');
    for(var x in keys){
      print(x+':'+keys[x]+'<br\>',true);
    }
  }

  function is_key(keycode){
    var r=keycode in keys;
    if(r){
      r=keys[keycode];
    }
    return r;
  }
  
  function initEvents(canvas){
    document.addEventListener('keydown', function (e){
    keys[e.code]=true;
    e.preventDefault();
  });
    document.addEventListener('keyup', function (e){
    keys[e.code]=false;
  }
);
    canvas.addEventListener('mousedown',function(e){
      mouse['button']=true;
      mouse['x']=e.offsetX;
      mouse['y']=e.offsetY;
      mouse['px']=mouse['x'];
      mouse['py']=mouse['y'];
    });
    
    canvas.addEventListener('mousemove',function(e){
      mouse['x']=e.offsetX;
      mouse['y']=e.offsetY;
    });
    
    canvas.addEventListener('mouseup',function(e){
      mouse['button']=false;
      mouse['x']=e.offsetX;
      mouse['y']=e.offsetY;
    });
  }
  function rescale(ps){
    ps[0]*=options['scale'];
    ps[1]*=options['scale'];
  }
  
  function load_param(x,key,param){
    if(key in param){
      return param[key];
    }else{
      return x;
    }
  }
  
  function load(param){
    stop();
    init=load_param(init,'init',param);
    run=load_param(run,'run',param);
    pause=load_param(pause,'pause',param);
    resume=load_param(resume,'resume',param);
    update=load_param(update,'update',param);
    stop=load_param(stop,'stop',param);
    init();
    run();
  }
  
  function initEngine(canvas_id,dw,dh,param){
    canvas=get(canvas_id);
    ctx=canvas.getContext('2d');
    width=dw;
    height=dh;
    canvas.width=dw;
    canvas.height=dh;
    options['scale']='1';
    initEvents(canvas);
    if(param){
      if('scale'in param){
        options['scale']=param['scale'];
        canvas.width=dw*options['scale'];
        canvas.height=dh*options['scale'];
      }
    }
  }
  
  function clear(){
    ctx.fillStyle='#000000';
    ctx.fillRect(0,0,width*options['scale'],height*options['scale']); 
  }
  
  function fillRect(){
    var x=0,y=0,w=width,h=height;
    if(arguments.length==3){
      w=arguments[0];
      h=arguments[1];
      style=arguments[2];
    }else
    if(arguments.length==5){
      x=arguments[0];
      y=arguments[1];
      w=arguments[2];
      h=arguments[3];
      style=arguments[4];
    }
    ctx.fillStyle=style;
    ctx.fillRect(x,y,w,h);
  }
</script>
