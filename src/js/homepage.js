setTimeout(function(){
    document.getElementById("icon-bounce").classList.remove("fa-bounce");
}, 2000);
setInterval(function(){
    document.getElementById("icon-bounce").classList.add("fa-bounce");
    setTimeout(function(){
        document.getElementById("icon-bounce").classList.remove("fa-bounce");
    }, 2000);
}, 5000);

$('#sec-cen').vAlign();

//on resize
$(window).resize(function() {
    $('#sec-cen').vAlign();
});