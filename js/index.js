// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     grabCursor: true,
//     clickable: true,
//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//     },

//     // pagination 的style
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         // bulletClass: 'my-bullet',
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// })

// // 滑鼠覆蓋停止自動切換
// swiper.el.onmouseover = function () {
//     swiper.autoplay.stop()
// }

// // 滑鼠離開開始自動切換
// swiper.el.onmouseout = function () {
//     swiper.autoplay.start()
// }

// pagination 點選設定
// for (i = 0; i < swiper.pagination.bullets.length; i++) {
//     swiper.pagination.bullets[i].onmouseover = function () {
//         this.click()
//     }
// }


const swiper = new Swiper('#a1', {
    loop: true,
    autoplay: {
        delay: 100,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    observer: true,
    observeParents: true
    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '#sc1',
    // },
});

const a2 = new Swiper('#a2', {
    loop: true,
    autoplay: {
        delay: 10,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    navigation: {
        nextEl: '#sbn',
        prevEl: '#sbp',
    },
    observer: true,
    observeParents: true
});

const a3 = new Swiper('#a3', {
    loop: true,
    autoplay: {
        delay: 10,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    navigation: {
        nextEl: '#sbn',
        prevEl: '#sbp',
    },
    observer: true,
    observeParents: true
});