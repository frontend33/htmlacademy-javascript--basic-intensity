window.renderStatistics=function(ctx,names,times){
  ctx.fillStyle='rgba(256,256,256,1.0)';
  ctx.strokeRect(100,10,420,270);
  ctx.fillRect(100,10,420,270);
  console.log(times);
  ctx.fillStyle= '#000';
  ctx.fillText('Ура вы победили !',120,40);
  ctx.font='16px PT Mono';

//сделать функцию пуе
  // var max=-1;
  // var maxIndex=-1;
  // for(var i=0;i<times.length;i++){
  //   var time=times[i];
  //   if (time> max){
  //     max=time;
  //     maxIndex=i;
  //   }
  // }
  // console.log("Смотри");
  // console.log(max);
  // console.log(maxIndex);


// Функция для выбора максимального времени
  var findMaxTime=function(times){
    maxTime=times[0];
    for(var i = 0;i<times.length;i++){
      if (maxTime<times[i]){
        maxTime=times[i];
        maxIndex=i;
      }
    }
    return maxTime;
  };


  // function getMaxElement(max,maxIndex){
  // for(var i=0;i<times.length;i++){
  //   var time=times[i];
  //   if (time> max){
  //     max=time;
  //     maxIndex=i;
  //     }
  //   }
  // return(max,maxIndex);
  
  // };
  
  var sss=findMaxTime(times);
  console.log("Смотри ниже ");
  console.log(sss);
  console.log(maxIndex);

  var histogramWidth=150;

  var step=histogramWidth/(sss-0);
  ctx.fillText('Худшее время: '+ sss.toFixed(2)+' мс У игрока '+names[maxIndex],120,60);

  //barHeigth высота одной полоски
  var barHeigth=20;
  //indent отступ между полосками 
  var indent=40;
  //initialX начальные координаты X которые я рисую
  var initialX=120;
  //initialY начальные координаты У которые я рисую
  var initialY=80;
  //lineHeight высота столбика
  var lineHeight=15;


  for(var i=0;i<times.length;i++){


  ctx.fillRect(initialX,initialY+indent*i,times[i]*step,barHeigth);
  ctx.fillText(names[i],initialX + histogramWidth,initialY+lineHeight+indent*i);
    }
  };
