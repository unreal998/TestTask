import $ from 'jquery'
$(document).ready(function(){
    $(".undermain article h5 p").css("padding","1%" )
    $("#activeP").css("padding","0.8%" )
    $("#articleBar article:first").addClass("active");

    $("#articleBar article").click(function(){
 
        $(this).find("p").slideToggle("slow")
        .siblings("p:visible").slideUp("slow");
        $(this).toggleClass("active");
        $(this).siblings("article").removeClass("active");
     });
    $("#burger").click(function(){
        $(".leftSide").css("display","none")
        $(".rightSide").css("display","none")
        $(".burgerMenu").slideToggle("slow").css("display","flex")
        $("#burger").css("display","none")
    });
    $("#close").click(function(){
        $(".leftSide").css("display","flex")
        $(".rightSide").css("display","flex")       
        $(".burgerMenu").css("display","none")
        $("#burger").css("display","flex")
    });
    $("#slideDownarrow").click(function(){
        $(".menuSidemini").slideToggle("slow").css("display","flex")
    });
    $(".slider").each(function () {
        var obj = $(this);
        $(obj).append("<div class='nav'></div>");
        $(obj).find("li").each(function () {
        $(this).addClass("slider"+$(this).index());
        });
        $(obj).find("span").first().addClass("on");
       });
        function sliderJS (obj, sl) {
       var ul = $(sl).find("ul"); 
       var bl = $(sl).find("li.slider"+obj);
       var step = $(bl).width();
       $(ul).animate({marginLeft: "-"+step*obj}, 500);
        }
      $(document).on("click", ".slider .nav span", function() { 
       var sl = $(this).closest(".slider");
       $(sl).find("span").removeClass("on");
       $(this).addClass("on");
       var obj = $(this).attr("rel"); 
       sliderJS(obj, sl);
       return false;
 });
 $("#rightFooter .slideUl ul:first").addClass("active");

    $("#rightFooter .slideUl ul").click(function(){
        $(this).find("li").slideToggle("slow")
        $(this).toggleClass("active");
        $(this).siblings("ul").removeClass("active");
     });
});
