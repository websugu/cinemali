$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    // $('#top-movies-slide').owlCarousel({
    //     items: 2,
    //     dots: false,
    //     loop: true,
    //     autoplay: true,
    //     autoplayHoverPause: true,
    //     responsive: {
    //         500: {
    //             items: 3
    //         },
    //         1280: {
    //             items: 4
    //         },
    //         1600: {
    //             items: 6
    //         }
    //     }
    // })

    // $('.movies-slide').owlCarousel({
    //     items: 2,
    //     dots: false,
    //     nav:true,
    //     navText: navText,
    //     margin: 15,
    //     responsive: {
    //         500: {
    //             items: 2
    //         },
    //         1280: {
    //             items: 4
    //         },
    //         1600: {
    //             items: 6
    //         }
    //     }
    // })
})






// video cards

const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})


let cardContainers = document.querySelectorAll('.card-container');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('.nxt-btn');

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})


//prevew start here 

let previewMovies = document.querySelector('.movies-preview');
let previewBox = previewMovies.querySelectorAll('.preview');

document.querySelectorAll('.card-container .card').forEach(product =>{
    product.onclick = () =>{
        previewMovies.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
         let target = preview.getAttribute('data-target');
         if(name == target){
            preview.classList.add('active');
         }
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector('.fa-xmark').onclick = () => {
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});