var token = '4871987984.c0fd52c.6cf337bfc8b3443ebfd730c04f220349',
    num_photos = 5,
    container = document.querySelector( '.gallery-wrapper' ),
    scrElement = document.createElement( 'script' );

window.mishaProcessResult = function( data ) {
  console.log(data);
	for( x in data.data ){
		container.innerHTML += '<div><a href="' + data.data[x].link + '" target="_blank"><img src="' + data.data[x].images.standard_resolution.url + '"></a></div>';
	}
}

scrElement.setAttribute( 'src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=mishaProcessResult' );
document.body.appendChild( scrElement );

$( document ).ready(function(){
  // $(".hamburger").on('click', function(e) {
  //   $('.navigation').toggleClass("hidden");
  //   e.preventDefault();
  //   $('.hamburger').toggleClass("is-active");
  // })

  $(window).resize(function () {
    // var viewportWidth = $(window).width();
    // if (viewportWidth <= 480) {
    //   $(".navigation").toggleClass("mobile-disabled");
    // }
    // if (viewportWidth > 480) {
    //   $(".mobile-burger").toggleClass("desktop-disabled");
    // }
  });
});

// fixed nav
// const nav = document.querySelector(".navbar");
// const topOfNav = nav.offsetTop;
//
// function fixNav() {
//     if(window.scrollY >= topOfNav) {
//       document.body.style.paddingTop = nav.offsetHeight + 'px';
//       document.body.classList.add('fixed-nav');
//     } else {
//       document.body.style.paddingTop = 0;
//       document.body.classList.remove('fixed-nav');
//     }
//   }
//
//   window.addEventListener('scroll', fixNav);
