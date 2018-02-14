window.renderStatistics=function(ctx,names,times){

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110,20,420,270);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100,10,420,270);
  console.log(times);
  ctx.fillStyle= '#000';
  ctx.textBaseline = 'hanging';

  ctx.fillText('Ура вы победили !',130,30);
  ctx.fillText('Список результатов: !',130,50);
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

  // var histogramWidth=150;


 
  // ctx.fillText('Худшее время: '+ sss.toFixed(2)+' мс У игрока '+names[i],120,60);
  var histogramWidth=150;

  var columnX=130;
  //initialX начальные координаты X которые я рисую
  var initialX=130;

  var columnWidth=40;
  //indent отступ между полосками 
  var indent=90;


  //barHeigth высота одной полоски
  var barHeigth=20;


  // //initialY начальные координаты У которые я рисую
  // var initialY=80;
  //lineHeight высота столбика
  var lineHeight=15;


  



  var step=histogramWidth/(sss);

  for(var i=0;i<times.length;i++){
    var columnHeight=step*times[i];
    var columnY=ctx.canvas.clientHeight-columnHeight-60;
    ctx.fillStyle='#000';
    ctx.fillText(times[i].toFixed(0),columnX+indent*i,columnY-15);


    if (names[i]==='Вы'){
      ctx.fillStyle='rgba(255,0,0,1)';
    } else{
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
  
    }

    ctx.fillRect(initialX + indent * i, columnY, columnWidth, columnHeight);
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], initialX + indent * i, columnY + columnHeight + 5);

    }
  };
