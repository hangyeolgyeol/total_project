const NETFLEX_PROJECT = [
  {
    project_background:'./img/netflex_main.png',
    project_name: "넷플릭스 코딩",
    project_desc: '프론트 공부를 하고 복습겸 처음으로 만들어본 프로젝트입니다. 넷플릭스 화면을 구성하였고. html과 css, JavaScript, JQuery들을 이용해 페이지를 제작하였습니다. 또한 헤더의 메뉴안에 있는 카테고리를 클릭할 때마다 카테고리에 해당하는 영화들이 화면에 뜰 수 있게 설정해놨습니다.',
    project_site_src: 'https://0hangyeol0.github.io/NETFLIX_portfolio/html/index.html',
    project_git_hub: ''
  }
]
const USED_PROJECT = [
  {
    project_background:'./img/used_1.png',
    project_name: 'USED 중고나라 코딩',
    project_desc: '중고나라 사이트를 벤치마킹해 만든 used 프로젝트 입니다. Spring과 MySql을 사용해서 DB에 상품 정보를 저장한후 DB에서 정보를 가져오는 방식으로 페이지를 제작하였고 로그인, 회원가입 페이지를 실제로 구현 가능하게 만들었습니다.',
    project_site_src: '',
    project_git_hub: 'https://github.com/hangyeolgyeol/used'
  }
]


$(document).ready(function() {
  let modal = ``;

  $(document).on('click','.item', function(){
    
    console.log()
  
    if($(this).attr('id') == "project_netflex_box") {

      modal_pro("netflex");

    }
    else if($(this).attr('id') == "project_used_box"){
      console.log("test     " + $(this).attr('id'));
      modal_pro("used");
    }
    
    // $('body').append(modal);
    // $('.modal').css({ display: 'block'}); // 순서 중요
  
    $(document).on('click','.modal_close', function() {
      console.log('modal_close 확인!');
      $('div').remove('.modal');
      $('body').css({ overflow: 'auto' });
    })
  
  });

  modal_close();
})

function modal_pro(pro_name) {

  let project_background = "";
  let project_name = "";
  let project_desc = "";
  let project_site_src = "";
  let project_git_hub = "";

  let project_skil_front;
  let project_skil_back;

  if(pro_name == 'netflex'){
    project_background =NETFLEX_PROJECT[0].project_background;
    project_name = NETFLEX_PROJECT[0].project_name;
    project_desc = NETFLEX_PROJECT[0].project_desc;
    project_site_src = NETFLEX_PROJECT[0].project_site_src;
    project_git_hub = NETFLEX_PROJECT[0].project_git_hub;

    project_skil_front = ['html', 'css', 'JavaScript', 'Jquery'];
    project_skil_back = [];
  }
  else if(pro_name == 'used'){
    project_background = USED_PROJECT[0].project_background;
    project_name = USED_PROJECT[0].project_name;
    project_desc = USED_PROJECT[0].project_desc;
    project_site = USED_PROJECT[0].project_site_src;
    project_git_hub = USED_PROJECT[0].project_git_hub;

    project_skil_front = ['html', 'css', 'JavaScript', 'Jquery'];
    project_skil_back = ['Spring', 'Java', 'MySql', 'MyBatis'];
  }


  modal = `

      

      <div class="modal">
          <button class="modal_close">X</button>
          <div class="modal_item_popup">
    
              <div class="modal_banner">
                  <div class="modal_banner_box">
                  </div>
              </div>
  
              <h1 class="modal_banner_title">
                ${project_name}
              </h1>

              <div class="modal_desc Description">
                  <section class="modal_sec"> 
                      <div class="modal_sec_haed">
                          <img src="./img/dice_1.png" alt="description">
                          <h5>Description</h5>
                      </div>
                      <div class="modal_sec_body">
                          ${project_desc}
                      </div>
                  </section>
  
                  <section class="modal_sec skill">
                      <div class="modal_sec_haed">
                          <img src="./img/dice_2.png" alt="Skill">
                          <h5>Use Skill</h5>
                      </div>
                      <div class="modal_sec_body modal_skil_box">
                          
                  `
            if(pro_name == 'netflex'){
              modal +=`
                        <ul class="netflex_skil project_skil_box">
                          <li>-${project_skil_front[0]}</li>
                          <li>-${project_skil_front[1]}</li>
                          <li>-${project_skil_front[2]}</li>
                          <li>-${project_skil_front[3]}</li>
                        </ul>
              `
            }
            else if(pro_name == 'used'){
              modal +=`
                        <ul class="used_skil_front project_skil_box">
                          <li>-${project_skil_front[0]}</li>
                          <li>-${project_skil_front[1]}</li>
                          <li>-${project_skil_front[2]}</li>
                          <li>-${project_skil_front[3]}</li>
                        </ul>
                        <ul class="used_skil_back project_skil_box">
                          <li>-${project_skil_back[0]}</li>
                          <li>-${project_skil_back[1]}</li>
                          <li>-${project_skil_back[2]}</li>
                          <li>-${project_skil_back[3]}</li>
                        </ul>
              `
            }
                              

  modal += `
                        
                      </div>    
                  </section>
  
                  <section class="modal_sec site">
                      <div class="modal_sec_haed">
                          <img src="./img/dice_3.png" alt="description">
                          <h5>Site</h5>
                      </div>
                      <div class="modal_sec_body">
                          <a href="${project_site_src}">${project_site_src}</a>
                      </div>    
                  </section>
  
                  <section class="modal_sec github">
                      <div class="modal_sec_haed">
                          <img src="./img/dice_4.png" alt="description">
                          <h5>GitHub</h5>
                      </div>
                      <div class="modal_sec_body">
                        <a href="${project_git_hub}">${project_git_hub}</a>
                      </div>    
                  </section>
                  
  
              </div> <!-- modal_desc-->
          </div> <!-- modal_item_popup -->
      </div> <!-- modal-->`

    $('body').append(modal);
    $('.modal').css({ display: 'block'}); // 순서 중요

    console.log(`url(${project_background}) no-repeat top / cover`);

    $('.modal_banner_box').css({
      background: `url(${project_background}) no-repeat top / cover`
    })

    modal_close();
}

function modal_close() {
  // 보류
  // $('.modal').keydown(function() {
  //   console.log("modal_close test!!!!!!!!!!!!!!!")
  //   if(e.keyCode == 13) {
  //     console.log('e.keyCode: ' + e.keyCode)    
      
  //     $('.modal_close').trigger('click');
  //   }
  // })
}

