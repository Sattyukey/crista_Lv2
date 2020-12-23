$(function(){

    //ヘッダースクロールギミック
    var header_change_px=656;//動作位置
    //スクロールした時の動作
    $(window).scroll(function(){
        if($(window).scrollTop()>header_change_px){
            $("header").addClass("header-mj-c-gray");
        }
        if($(window).scrollTop()<header_change_px){
            $("header").removeClass("header-mj-c-gray");
        }
    })

    //modalの表示、非表示アニメーション
    $(".js-modal-show").click(function(){
        $("#modal").fadeIn();
      });
        
      $(".js-modal-close").click(function(){
        $("#modal").fadeOut();
      });

});