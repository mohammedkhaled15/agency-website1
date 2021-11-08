$(document).ready(function(){
    $(".carousel").carousel({
        interval:5000
    })
    $(".gear-check").click(function () { 
        $(".color-options").fadeToggle();
    });
    var colorLi = $(".color-options ul li");

    colorLi
    .eq(0).css("backgroundColor","#f0f").end()
    .eq(1).css("backgroundColor","gray").end()
    .eq(2).css("backgroundColor","#00f").end()
    .eq(3).css("backgroundColor","#fff");
    colorLi.click(function(){
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
        // console.log($(this).attr("data-value"))
    })
})

$( window ).on("load",function() {
    $(".loading-page").fadeOut(5000,function(){
        $("body").css("overflow","auto")
    })
  });

//   window.addEventListener('load', (event) => {
//     console.log('page is fully loaded');
//   });