$(document).ready(function(){
    $('.book').on('click', function(){
        var num = $(this).data('book');
        var Num = $('.book-info[data-bookId = "' + num + '"]');
        $('.info').removeClass('info-hide')
        Num.addClass('active');
    })
    
    $('.close').on('click', function(){
        var Num = $('.info-content').find('.active');
        
        console.log(Num);
        $('.info').addClass('info-hide');
        Num.removeClass('active');
    })
    
    // 移動アニメーション
    $('.bus').on('click', function(){
        var top = $('.business').offset().top;
        $('html, body').animate({scrollTop:top}, 800);
    })
    
    // 移動アニメーション
    $('.nov').on('click', function(){
        var top = $('.novel').offset().top;
        $('html, body').animate({scrollTop:top}, 800);
    })
});