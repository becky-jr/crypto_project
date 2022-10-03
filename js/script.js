

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

        document.body.style.overflow = '';

    })
})

modalCloseConfident.forEach(btn => {
    btn.addEventListener('click', () => {
        confidentForm.classList.remove('show');
        confidentForm.classList.add('hide');
    })
})

