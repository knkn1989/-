// スムーススクロール
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 600;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
// $('#btn a[href^="#"]').on('click', function(event) {
//   $('.fix_btn').trigger('click');
//   fix_btn.addClass('clicked')
// });

// プロフィール写真のフェードイン
$(function(){
  $(window).scroll(function (){
      $('.about_image_item').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight){
              $(this).addClass('about_image_item_show');
          }
      });
  });
  });
//プロフィール内容のフェードイン
$(function(){
  $(window).scroll(function (){
      $('.about_item').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight){
              $(this).addClass('about_item_show');
          }
      });
  });
  });


//service内容のフェードイン
$(function(){
  $(window).scroll(function (){
      $('.effect1').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight){
              $(this).addClass('effect_in');
          }
      });
  });
  });
$(function(){
  $(window).scroll(function (){
      $('.effect2').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight){
              $(this).addClass('effect_in');
          }
      });
  });
  });
$(function(){
  $(window).scroll(function (){
      $('.effect3').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight){
              $(this).addClass('effect_in');
          }
      });
  });
  });

//worksのフェードイン
$(function(){
  $(window).scroll(function (){
      $('.works_effect1').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight){
              $(this).addClass('works_effect_in');
          }
      });
  });
  });
// ﾊﾝﾊﾞｰｶﾞｰﾒﾆｭｰ
  const fix_btn = document.getElementById('fix_btn');
  const hidden = document.getElementById('hidden');
  const body = document.getElementById('body');
  
  fix_btn.addEventListener('click', function(){
      fix_btn.classList.toggle('clicked');
      hidden.classList.toggle('clicked');
  });

  $(function(){
      if(fix_btn.classList.contains('clicked')){
          body.addEventListener('click', function(){
              fix_btn.classList.remove('clicked');
              hidden.classList.remove('clicked');
          });
      }
  });

//トップへ戻るボタンここから
      //スクロール量を取得する関数
    function getScrolled() {
      return ( window.pageYOffset !== undefined ) ? window.pageYOffset: document.documentElement.scrollTop;
    }
    //トップに戻るボタンの要素を取得
    var topButton = document.getElementById( 'page-top' );
    //ボタンの表示・非表示
    window.onscroll = function() {
      ( getScrolled() > 500 ) ? topButton.classList.add( 'fade-in' ): topButton.classList.remove( 'fade-in' );
    };
    //トップに移動する関数
    function scrollToTop() {
      var scrolled = getScrolled();
      window.scrollTo( 0, Math.floor( scrolled / 2 ) );
      if ( scrolled > 0 ) {
        window.setTimeout( scrollToTop, 30 );
      }
    };
    //イベント登録
    topButton.onclick = function() {
      scrollToTop();
    };
//トップへ戻るボタンここまで