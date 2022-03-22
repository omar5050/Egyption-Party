// innerWidth navbar
let widthNavBar = $('.nav').innerWidth()

// navbar
$(".menu-bar").click(function(){
   
   $('.nav').show(250);
   
   $('.menu-bar').animate({left:widthNavBar + 10},250);
  
   $('.slide-head').animate({marginLeft:'150px'} , 250);

})

$('.icon-close').click(function(){
   $('.nav').hide(250);
   $('.menu-bar').animate({left:'10px'},250);
   $('.slide-head').animate({marginLeft:'0'} , 250);
})


/************************** */

// Button Slide
$('.items button').click(function(){
   $(this).next().slideToggle();
   $(this).parent().siblings().find('.item').slideUp();
   // console.log(this)
}) 


// -- change navbar background with scroll
let offsetHeader = $('#header').offset().top

$(window).scroll(function(){

   let wScroll = $(window).scrollTop()

   if(wScroll > offsetHeader + 200){
      
      $('.nav').css("background-color" , 'tomato');
      
      $('#btnUp').fadeIn(500)
   }
   else{
      $('.nav').css("background-color" , 'black');
      $('#btnUp').fadeOut(500)
   }
   
})

// btnUp with click scrollTop to header
$('#btnUp').click(function(){
   $('html , body').animate({scrollTop:0}, 1000);
})

// click link scrollTop smothing
// animate pta5d jquery property
$(`a[href^="#"]`).click(function(){

   let aHref = $(this).attr('href');
   let sectionOffset = $(aHref).offset().top;
   // console.log(aHref ,sectionOffset )
   
   
   $('html , body').animate({scrollTop:sectionOffset}, 1000)
   // 1- menf34 a3ml animate window
   // 2- html , body 3l4an ed3m kol browser


   // $(window).scrollTop(offsetContact) => da menf34 a3mlo duration 
})





// document ready fade out spinner , loading , scroll-y
$(document).ready(function(){
   $('#loading .spinner').fadeOut(1000 , function(){
      $('#loading').fadeOut(1000 , function(){
         $('body').css("overflow-y" , "auto")
      });
   });
})



// Get countDown date
let countDownDate= new Date('Feb 2, 2022, 09:48:26').getTime();

let counter = setInterval(() => {
   // Get Current Date;
   let cuurentDate = new Date().getTime();

   // Diffrenc betwen now and CountDate
   let diffDate = countDownDate - cuurentDate ;

   // Units
   let day = Math.floor(diffDate / (1000 * 60 * 60 * 24));
   
   let Hours = Math.floor(diffDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
   
   let minute = Math.floor(diffDate % (1000 * 60 * 60) / (1000 * 60));
 
   let sec = Math.floor(diffDate % (1000 * 60) / (1000));
   

   document.querySelector('.day').innerHTML = day < 10 ? `0${day} day` : `${day} day`;
   document.querySelector('.hours').innerHTML = Hours < 10 ? `0${Hours} Hours` : `${Hours} Hours`;
   document.querySelector('.minute').innerHTML = minute < 10 ? `0${minute} min` : `${minute} min`;
   document.querySelector('.sec').innerHTML = sec < 10 ? `0${sec} sec` : `${sec} sec`


   // console.log(sec);

}, 1000);


// select text area
let textValue = document.querySelector('textarea');

// Write text decrees count to 0 
$(textValue).on("input",function(){
   
   // decalre count , maxLength
   let count = document.querySelector('#count');
   let maxLength = $(textValue).attr('maxlength')

   // decrees count to 0
   count.innerHTML = maxLength - this.value.length // => 100 - value 1 = 99
  
   if(count.innerHTML == 0)
   {
      count.innerHTML = "your available character finished";
      $(count).addClass('text-danger')
   }
   else
   {
      $(count).removeClass('text-danger')
   }
   
})







// practise JQuery

// 1-$(window).scroll => awl lma a3ml scroll browse
// 2-$(window).scrollTop() => mstra mussre from top  -> ana p3dt an top pe ad eh
//                |      
//             setter 5leah e3ml scroll 100  // $(window).scrollTop(0);

// 3- $('.title-contact').offset() => return object top left => mkan ae element fen

// 4- bootStrab 5 => scroll-behaviour: smoth => ae scroll he7sl pe smoth
// => two big promlem => 1- m4 h2dr at7km fe duration pta3ha
//                       2- m4 ptd3m m3zm el browser   


// 5-loading screen

//    $(document).ready() vs window.addEventListener('load')
/***        |                                |
 *       jQuery event                   js event
 *          |                                |      
 *time:    first                            second
 *          |                                 |
 *    document ready load ala tol        complete loaded => wait all window complete load
 * */        



// excute code after duration mili sec
// (call back , mili sec , argument)
//  setTimeout(function(){
//     alert('hello');
//  } ,5000)


//  setTimeout(welcome,5000 , 'omar' , '24')

// function welcome(name , age){
//   console.log(`welcome: ${name} your age is: ${age}`)
// }



// excute code every time after duration and reapat again again again 
// setInterval(() => {
//    console.log('hi')
// }, 2000);

// setInterval(welcome , 2000 , 'omar' , 24);


// let div = document.querySelector('.omar');

// function countDown(){
//    div.innerHTML -=1 
// }

// let x = setInterval(() => {
//    countDown()
//    if( div.innerHTML === "0")
//    {
//       clearInterval(x);
//    }
// }, 1000);





// $('#contactLink').click(function(){
//    $('html , body').animate({scrollTop:offsetContact}, 1000)
   // 1- menf34 a3ml animate window
   // 2- html , body 3l4an ed3m kol browser


   // $(window).scrollTop(offsetContact) => da menf34 a3mlo duration 
// })