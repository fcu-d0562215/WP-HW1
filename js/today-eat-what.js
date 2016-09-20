$(document).ready(function($) {
    
    resize();
});

$(window).resize(function(event) {
    resize();
});
function full_page(){
    var h = $(window).height();
    var header_h = $('.header').height();
    var content_h = $('.content').height();
    var footer_h = $('.footer').height();
    var blank_h = h - header_h - content_h - footer_h ;
    console.log(blank_h)
    if (blank_h > 0) {
        $('.footer').css('padding-top', blank_h);
    } else {}
}
function resize(){
    var w = $(window).width();
    var h = $(window).height();
    var header_h = $('.header').height();
    var content_h = $('.content').height();
    var footer_h = $('.footer').height();
    var c_content_h = h - header_h - footer_h;
    var h_to_w = c_content_h * 4 / 3 ;
    var content_w_xl = (c_content_h * 4 / 3 /2 ) - footer_h;
    //console.log(h , header_h , footer_h , c_content_h);
    if (w>h && h_to_w<w) {
        $('.carousel').width(content_w_xl+"px");
        console.log(h , c_content_h);
    } 
    else {
        console.log("fail");
    }
    full_page();
}
