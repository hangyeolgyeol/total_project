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

  $(document).on('click', '#project_page', function() {
    $('.sec').fadeOut();
    $('#project').fadeIn();
  })


  $(document).on('click','.item', function(){
    let modal = 
    `<div class="modal">
        <div class="modal_item_popup">
            <button class="modal_close">X</button>

            <div class="modal_banner">
                <div class="modal_banner_box">
                    <div class="modal_banner_title">
                    </div>
                    <div class="play_btn_box">
                        <div class="play_btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ltr-4z3qvp e1svuwfo1" data-name="Play" aria-labelledby=":R19kpt9llkm:" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path></svg>
                        </div>
                        <div class="play_txt">재생</div> 
                    </div>
                </div>
            </div>
            
            <div class="modal_desc">
            </div>
        </div>
    </div>
    `
    
    $('body').append(modal);
  });


})