var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },autoplay: {
    delay: 1000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// function changElement(){

//     const ele=document.querySelector("#menu")
//     ele.addEventListener("click",function(){
//       console.log("hello")
//         ele.classList.add('ri-menu-line');
//         ele.classList.remove('bi-x-lg');
     
//     })
// }

  const ele=document.querySelector("#menu")
ele.addEventListener("click",function(){
  console.log("hello")
  
  //   ele.classList.remove('ri-menu-line');
  //   changElement()
  // ele.classList.add('bi-x-lg');
  
  if(ele.classList.value===ele.classList.value){
    // arrow.classList.remove("ri-arrow-down-s-line")
    ele.classList.toggle("bi-x-lg")
    console.log(ele)
  }else if(ele.classList.value===ele.classList.value){
    ele.classList.toggle("ri-menu-line")
      // arrow.classList.add("ri-arrow-down-s-line")
  }
  
})
let timer;
 
// function changicon(){
 

//   const ele=document.querySelector("#menu1")
//   ele.addEventListener("click",function(){
//     console.log("hello")
//     clearInterval(timer);


// timer=setInterval(function(){

//     ele.classList.remove("ri-arrow-up-s-line")
 
//     ele.classList.add("ri-arrow-down-s-line")
   
//   })
// },2000)
// }

let arrow=document.querySelector(".menu1")

arrow.addEventListener("click",function(){

console.log(arrow.classList.value)


  if(arrow.classList.value===arrow.classList.value){
    // arrow.classList.remove("ri-arrow-down-s-line")
    arrow.classList.toggle("ri-arrow-up-s-line")
    console.log(arrow)
  }else if(arrow.classList.value===arrow.classList.value){
    arrow.classList.toggle("ri-arrow-up-s-line")
      // arrow.classList.add("ri-arrow-down-s-line")
  }
  


  // arrow.classList.add("ri-arrow-up-s-line")
})

// function newslider(){
//   const swiper = new Swiper(".mySwiper", {
//     // Optional parameters
//     direction: "horizontal",
//     loop: true,
//     autoHeight: false,
//     centeredSlides:true,
//     slidesPerView: 1,
//     // Responsive breakpoints
//     breakpoints: {
//       640: {
//         slidesPerView:2,
//           spaceBetween: 40,
//       },
//       992: {
//         slidesPerView: 3,
//           spaceBetween: 40,
//       }
//     },
  
//     // If we need pagination
//     pagination: {
//       el: ".swiper-pagination"
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev"
//     }
  
//     // And if we need scrollbar
//     /*scrollbar: {
//       el: '.swiper-scrollbar',
//     },*/
//   });
  
  
// }
// newslider()


var swiper = new Swiper(".mySwiper1", {
//   slidesPerView: 3,
//   spaceBetween: 20,
//   loop: true,
//   effect: "cards",
//   grabCursor: true,
//  navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },autoplay: {
//     delay: 2000,
//   },
//   pagination: {
//     el: ".swiper-pagination",

//   },
//   mousewheel: true,
//   keyboard: true,
autoplay: {
  delay: 2500,
  disableOnInteraction: false,
},
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
navigation: {
  nextEl: ".clients-next",
  prevEl: ".clients-prev",
},
breakpoints: {
  280: {
    slidesPerView: 1.1,
    centeredSlides: true,
  },
  768: {
    slidesPerView: 1.3,
    centeredSlides: true,
  },
  1024: {
    slidesPerView: 1.8,
    centeredSlides: true,
  },
  1200: {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
  },
},
});
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    280: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
    },
  }
});
