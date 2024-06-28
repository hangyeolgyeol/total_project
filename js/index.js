$(document).ready(function() {
  console.log("시작")
  let sec_bang = 0;
  let timer = 1000;

  // 보고싶은 sec과 연결된 li들을 클릭했을때 나머지 sec들을 none 처리하고 클릭한 sec은 flex주기
  $(document).on('click', '.nav_li', function(){
    let sec_index = $(this).index();
    console.log("sec의 인덱스 번호를 nav에 비례해 사용하고 있다: " + sec_index);
    $('.sec').fadeOut();
    $('.sec').eq(sec_index).fadeIn();
  })
  console.log($('.project_pan'))


  // project의 화살표를 클릭할 시 다음 프로젝트 페이지로 넘기기
  $(document).on('click', '.next_page', function() {
    $('.project_pan').fadeOut();
    $('.project_pan').eq(sec_bang % 2).fadeIn();

    sec_bang++;
  })


  function slide() {

  }


  $(document).on('click', '#project_page', function() {
    $('.sec').fadeOut();
    $('#project').fadeIn();
  })



})