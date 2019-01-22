$('#fullpage').fullpage({
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    controlArrows: true,
    verticalCentered: true,
    navigation:true,
    navigationPosition: 'right',
    anchors:['one', 'two', 'three', 'four', 'five'],
    afterLoad: function(anchorLink, index){
    var slideNumber = $('.fp-section.active').find('.fp-slide.active').index() + 1
        alert(slideNumber);
}
});
// $("#clicks").on('click',function() {
//     $('html, body').animate({
//         'scrollTop' : $("#two").position().top
//     });
// });

//methods
$.fn.fullpage.setAllowScrolling(true);


