var main = $('.main-01')[0];  //added [0]
var footer = $('.footer')[0];

setInterval(function(){
    var mainHeight = main.clientHeight;
    console.log('mainHeight is ' + mainHeight);
    var userHeight = $(window).height()
    var footerHeight = footer.clientHeight*1.5;

    if(userHeight<(mainHeight+footerHeight)){//user 윈도우 높이가 main 보다 작은경우
      //footer를 박스 아래 relative로 고정해야함
      $('.footer').addClass('footerposition');
    }
    else{
      $('.footer').removeClass('footerposition');
    }
},128);
