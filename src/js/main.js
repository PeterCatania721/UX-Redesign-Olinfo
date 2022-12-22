(function ($) {
    // VERTICALLY ALIGN FUNCTION
    $.fn.vAlign = function() {
        return this.each(function(i){
            var ah = $(this).height();
            var ph = $(this).parent().height();
            var mh = Math.ceil((ph-ah) / 2) - 16;
            $(this).css('margin-top', mh);
        });
   };
})(jQuery);

$(function () {
    $('#loader').hide();
    $(".content-page").css("visibility", "visible");
 });

 setTimeout(function(){
    document.getElementById("icon-bounce").classList.remove("fa-bounce");
}, 2000);
setInterval(function(){
    document.getElementById("icon-bounce").classList.add("fa-bounce");
    setTimeout(function(){
        document.getElementById("icon-bounce").classList.remove("fa-bounce");
    }, 2000);
}, 5000);

