function display () {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var diem = 'AM';
  var myClock = document.getElementById('clock');
  if (seconds<10){
    seconds = '0' + seconds;
  }
  if (minutes<10){
    minutes = '0' + minutes;
  }
  if (hours<10){
    hours = '0' + hours;
  }
  if (hours>12){
    hours = hours - 12;
    diem = "PM"
  }
  if (hours == 0){
    hours == 12;
  }
  myClock.innerText = hours + ':' + minutes + ':' + seconds + '' + diem;
  if(seconds==0){
    changeBgColor()
  }
}
function changeBgColor(){
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for(var i=0;i<6; i++){
    color += letters[Math.floor(Math.random()*16)]
  }
  document.body.style.backgroundColor = color;
}
changeBgColor();
display();
setInterval(display,1000)
