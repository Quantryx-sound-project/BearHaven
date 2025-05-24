
new Swiper('.swiper-container', {
      loop: true, // Opakovanie slideov
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        //dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
     breakpoints: {
        0: {
          slidesPerView: 1, // Počet slideov na malých obrazovkách
          spaceBetween: 30, // Medzera medzi slideami
        },
        768: {
          slidesPerView: 1, // Počet slideov na stredných obrazovkách
          spaceBetween: 30, // Medzera medzi slideami
        },
        1024: {
          slidesPerView: 1, // Počet slideov na veľkých obrazovkách
          spaceBetween: 30, // Medzera medzi slideami
        },
    }});
