

$('.slider_inner').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: false,
    nextArrow: false
});

$('.history_cards').slick({
    mobileFirst: true,
    infinite: true,
    slidesToShow: 1,
    variableWidth: true,
    adaptiveHeight: true,
    // width: 420,
    prevArrow: false,
    nextArrow: false,
    responsive: [
        {
            breakpoint: 767,
            settings: "unslick"
        }
    ]
});



// $('.method_card').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: true,
//     prevArrow: false,
//     nextArrow: false
// });


// const hamburger = document.querySelector('.hamburger');
// const navMenu = document.querySelector('.nav_menu');
//
// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     navMenu.classList.toggle('active');
//
// })
//
// document.querySelectorAll('.nav_menu li').forEach(evt => {
//     evt.addEventListener('click', () => {
//         hamburger.classList.remove('active');
//         navMenu.classList.remove('active');
//     })
// })
