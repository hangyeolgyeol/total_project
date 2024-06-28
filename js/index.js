

$(document).ready(function() {
  console.log("시작");  

  // 보고싶은 sec과 연결된 li들을 클릭했을때 나머지 sec들을 none 처리하고 클릭한 sec은 flex주기
  $(document).on('click', '.nav_li', function(){

      let sec_index = $(this).index();
      $('.sec > .sec_desc').css({ opacity: 0 })
        
      $('.sec > .sec_desc').eq(sec_index).css({ opacity: 1});
  })






  
})