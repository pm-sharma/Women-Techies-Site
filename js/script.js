$('#fullpage').fullpage({
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    controlArrows: true,
    verticalCentered: true,
    navigation:true,
    navigationPosition: 'right',
    anchors:['one', 'two', 'three', 'four', 'five']
});
// $("#clicks").on('click',function() {
//     $('html, body').animate({
//         'scrollTop' : $("#two").position().top
//     });
// });

//methods
$.fn.fullpage.setAllowScrolling(true);


