$(document).ready(function(){
   
    




  $('.mousePhone').owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    loop:true,
    margin:10,
    nav:false,
 
  
    dots:true,
   
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})




$('.specialPraduct').owlCarousel({
items:5,
nav:true,
dots:false,
responsive:{
    0:{
        items:2
    },
    600:{
        items:3
    },
    1000:{
        items:5
    }
}
})

$('.div_categories').owlCarousel({
  items:5,
  nav:true,
  dots:false,
  responsive:{
    0:{
        items:2
    },
    600:{
        items:3
    },
    1100:{
        items:5
    }
}
  })

  $('.best_Deals').owlCarousel({
    dots:true,
  
   loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2
        },
        1100:{
            items:2
        }
    } 
})



$('.custemer').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  
  responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1100:{
        items:3
    }
}
})


$('.featur_pro').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1100:{
          items:5
      }
  }
})



$('.div_icone').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:false,
  autoplay:true,
  autoplayTimeout:7000,
  responsive:{
      0:{
          items:3
      },
      600:{
          items:5
      },
      1100:{
          items:5
      }
  }
})

$('.topRated').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  dots:false,
  autoplayTimeout:4000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1100:{
          items:3
      }
  }
})
$('.latestBlog').owlCarousel({
  loop:true,
  margin:20,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1100:{
          items:3
      }
  }
})


  });



  setTimeout(function(){
    $(".login").show()
    $("#sign-in-bg").show()
},3000)

$(".close-login-btn").click(function (e) { 
    e.preventDefault();
    $(".login").hide();
    $("#sign-in-bg").hide()
 })
// ------------------scroll ----------------

$(window).on('scroll',function() {
    if (window.scrollY > window.outerHeight) {
      $('#scrollToTop').addClass('active')
    } else {
      $('#scrollToTop').removeClass('active')
    }
  })
  
  $('#scrollToTop').on('click',function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
  })


  $('.carousel').carousel({
    interval: 2000
  })