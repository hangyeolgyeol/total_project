$(document).ready(function () {

    // 메뉴이동
    $(document).on('click', '.h_li a', function (e) {
        e.preventDefault();
        let href = $(this).attr('href');
        let o_top = $(href).offset().top;
        $('html, body').animate({
            scrollTop: o_top
        }, 500)
    });



    // 스크롤 움직이면 
    let chk = false;
    let chart_length = $('.chartrow').length;
    let sec3_o_bot = $('#sec3').offset().top + $('#sec3').height();


    $(window).scroll(function () {
        let s_top = $(window).scrollTop();
        let s_bot = s_top + $(window).height();


        //퍼센트 
        if (chk != true) {
            if (sec3_o_bot - 800 <= s_bot) {

                let array = [95, 100, 85, 95, 100, 90, 80];
                for (let i = 0; i < chart_length; i++) {
                    tmp(i, array[i]);

                    $('.row0' + (i + 1)).css({
                        width: array[i] + '%',
                        transition: 'all 1s'
                    })
                    $('.row0' + (i + 1) + ' .row_per').css({
                        right: '10px',
                        transition: 'all 1s'
                    })
                }

                chk = true;

            }
        }

    })


    // 퍼센트 함수
    function tmp(i, num) {
        let up = 0; let interval;
        interval = setInterval(function () {
            up++;

            $('.chartrow').eq(i).find('.row_per').text(up + "%");
            if (up >= num) {
                clearInterval(interval);
            }
        }, 13)
    }

})