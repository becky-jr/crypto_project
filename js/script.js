

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
    dots: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [
        {
            breakpoint: 1000,
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

const modalTrigger = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalClose = document.querySelectorAll('[data-close]'),
      modalTriggerForm = document.querySelectorAll('[data-form]'),
      modalForm = document.querySelector('.modal-form'),
      modalConfident = document.querySelectorAll('[data-confident]'),
      confidentForm = document.querySelector('.confidential_popup'),
      modalCloseConfident = document.querySelectorAll('[data-closeConfident]'),

      modalTimeTrigger = document.querySelectorAll('[data-time]'),
      modalTimeClose = document.querySelectorAll('[data-timeClose]'),
      modalTime = document.querySelector('.time_form');

modalTimeTrigger.forEach(btn => {
    btn.addEventListener('click', () => {

            modalTime.classList.add('show');
            modal.classList.remove('hide');


        }
    )
});

modalTimeClose.forEach(btn => {
    btn.addEventListener('click', () => {
        modalTime.classList.remove('show');
    })
})


modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => {

            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';


        }
    )
})

modalTriggerForm.forEach(btn => {
    btn.addEventListener('click', () => {

            modalForm.classList.add('show');
            modalForm.classList.remove('hide');
            document.body.style.overflow = 'hidden';


        }
    )
})

modalConfident.forEach(btn => {
    btn.addEventListener('click', () => {
        confidentForm.classList.add('show');
        confidentForm.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    })
})



modalClose.forEach(btn => {
    btn.addEventListener('click', ()=> {

        modal.classList.remove('show');
        modal.classList.add('hide');
        modalForm.classList.remove('show');
        modalForm.classList.add('hide');

        modalBurger.classList.remove('opened');
        modalBurger.classList.add('closed');
        document.body.style.overflow = '';

        document.body.style.overflow = '';

    })
})

modalCloseConfident.forEach(btn => {
    btn.addEventListener('click', () => {
        confidentForm.classList.remove('show');
        confidentForm.classList.add('hide');
        document.body.style.overflow = '';

    })
})


const modalBurgerTrigger = document.querySelectorAll('[data-burger]'),
      modalBurgerClose = document.querySelectorAll('[data-burgerClose]'),
      modalBurger = document.querySelector('.menu_burger');

modalBurgerTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
        modalBurger.classList.add('opened');
        modalBurger.classList.remove('closed');
        document.body.style.overflow = 'hidden';
    })
})
modalBurgerClose.forEach(btn => {
    btn.addEventListener('click', () => {
        modalBurger.classList.remove('opened');
        modalBurger.classList.add('closed');
        document.body.style.overflow = '';

    })
});

$('ul li a[href="#about"]').on("click", function (e) {
    // e.preventDefault();
    modalBurger.classList.remove('opened');
    modalBurger.classList.add('closed');
    document.body.style.overflow = '';

});
$('ul li a[href="#advantages"]').on("click", function (e) {
    // e.preventDefault();
    modalBurger.classList.remove('opened');
    modalBurger.classList.add('closed');
    document.body.style.overflow = '';

});
$('ul li a[href="#history"]').on("click", function (e) {
    // e.preventDefault();
    modalBurger.classList.remove('opened');
    modalBurger.classList.add('closed');
    document.body.style.overflow = '';

});
$('ul li a[href="#income"]').on("click", function (e) {
    // e.preventDefault();
    modalBurger.classList.remove('opened');
    modalBurger.classList.add('closed');
    document.body.style.overflow = '';

});
$('ul li a[href="#contacts"]').on("click", function (e) {
    // e.preventDefault();
    modalBurger.classList.remove('opened');
    modalBurger.classList.add('closed');
    document.body.style.overflow = '';

});






const card1Trigger = document.querySelectorAll('.bank'),
      card2Trigger = document.querySelectorAll('.estate'),
      card3Trigger = document.querySelectorAll('.fund'),
      card1 = document.querySelector('.card-1'),
      card2 = document.querySelector('.card-2'),
      card3 = document.querySelector('.card-3');

console.log(card1Trigger)
console.log(card1)

card1Trigger.forEach(btn => {
    btn.addEventListener('click', ()=> {
        console.log(1)

        card1.classList.add('cardClicked');
        card2.classList.remove('cardClicked');
        card3.classList.remove('cardClicked');

        card1.style.display = 'block';


        // card1.style.display = 'block';
        // card2.style.display = 'none';
        // card3.style.display = 'none';

    })
})

card2Trigger.forEach(btn => {
    btn.addEventListener('click', ()=> {
        console.log(2)
        card2.classList.add('cardClicked');
        card1.classList.remove('cardClicked');
        card3.classList.remove('cardClicked');

        card1.style.display = 'none'

        //
        // card1.style.display = 'none';
        // card2.style.display = 'block';
        // card3.style.display = 'none';

    })
})

card3Trigger.forEach(btn => {
    btn.addEventListener('click', ()=> {
        console.log(3)
        card3.classList.add('cardClicked');
        card2.classList.remove('cardClicked');
        card1.classList.remove('cardClicked');

        card1.style.display = 'none'

        // card1.style.display = 'none';
        // card2.style.display = 'none';
        // card3.style.display = 'block';

    })
})

// function phoneIcon() {
//     const icon = document.querySelector('.phone_icon');
//     const windowY = window.screenY;
//     console.log(windowY)
//
//     if (windowY >= 500) {
//         icon.classList.add('.phoneIconShow');
//     } else if (windowY <= 500) {
//         // icon.style.display = 'none'
//         icon.classList.remove('.phoneIconShow');
//
//     }
// }
// phoneIcon();

$(document).scroll(function () {
    let windows = window.screen;

    if (windows.availWidth > 1300) {
        var y = $(this).scrollTop();
        if (y > 300) {
            $('.phone_icon').fadeIn();
        } else {
            $('.phone_icon').fadeOut();
        }

    }


});

let windows = window.screen;
console.log(windows)
