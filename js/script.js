// (function () {
//     let $html = $(document.documentElement),
//         menuBtn = document.querySelector(".burger"),
//         menuWrapper = document.querySelector(".menu_burger"),
//         menuClose = document.querySelector(".menuClose"),
//         openedMenu = "opened",
//         overflowHidden = "oveflowHidden";
//
//
//
//
//
//     menuBtn.on("click", function (event) {
//         menuWrapper.toggleClass(openedMenu);
//         menuBtn.toggleClass(openedMenu);
//         $html.toggleClass(overflowHidden);
//         $html.toggleClass("open_menu");
//     });
//     menuClose.on("click", function (event) {
//         menuWrapper.removeClass(openedMenu);
//         menuBtn.removeClass(openedMenu);
//         $html.removeClass(overflowHidden);
//         $html.removeClass("open_menu");
//     });
//
//     $(document).on("click touchstart", function (e) {
//         if (
//             $(e.target).closest(menuBtn).length ||
//             $(e.target).closest(menuWrapper).length
//         )
//             return;
//         if (menuBtn.hasClass(openedMenu)) {
//             menuWrapper.removeClass(openedMenu);
//             menuBtn.removeClass(openedMenu);
//             $html.removeClass(overflowHidden);
//             $html.removeClass("open_menu");
//         }
//     });
//
//     $('ul li a[href="#partners"]').on("click", function (e) {
//         e.preventDefault();
//         menuWrapper.removeClass(openedMenu);
//         menuBtn.removeClass(openedMenu);
//         $html.removeClass(overflowHidden);
//         $html.removeClass("open_menu");
//         $("html, body").animate({
//                 scrollTop: $($(this).attr("href")).offset().top - 100,
//             },
//             500
//         );
//     });
//
//     $('ul li a[href="#maps"]').on("click", function (e) {
//         e.preventDefault();
//         menuWrapper.removeClass(openedMenu);
//         menuBtn.removeClass(openedMenu);
//         $html.removeClass(overflowHidden);
//         $html.removeClass("open_menu");
//         $("html, body").animate({
//                 scrollTop: $($(this).attr("href")).offset().top - 100,
//             },
//             500
//         );
//     });
//
//     function opendModal() {
//         const modal = document.querySelector('.tt_form');
//
//         // document.body.classList.add('overflowHidden');
//
//         modal.classList.add('opened');
//
//         document.body.style.overflow = 'hidden';
//     }
//     // opendModal();
//
//     function showModalByScroll() {
//         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
//             opendModal();
//             window.removeEventListener('scroll', showModalByScroll);
//         }
//     }
//
//     window.addEventListener('scroll', showModalByScroll);
//
// });


$('.slider_inner').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: false,
    nextArrow: false
});
