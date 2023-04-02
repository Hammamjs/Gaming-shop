$(function() {

  $('.toggle-sidebar').on( "click",() =>  {
    $('body').toggleClass('sidebar-padding');
    $('.sidebar').toggleClass('toggle-sidebar');
  });


  $('.sm').on('click', function() {
    $('body').toggleClass('sidebar-padding');
    $('.sidebar').toggleClass('toggle-sidebar')
  })

 // search-icon in small media
$('.search-bar').on('click' , function () {
  $(`<div class = "search rounded-md shadow-white"> <i class = "fa fa-xmark close-search"> </i>  <div class = "search-box">           \
  <input class = "in" type = "text" /> <button class = "btn rounded-lg">search </button> <div/> </div>`).appendTo($('.header'))
  $('.search').css( {
    "position": "fixed",
    "width": 343 + "px",
    "height": 50 + '%',
    "left": 48 + '%',
    "top" : 250 + 'px',
    "transition" : 'all .5s',
    "z-index" : '1000',
    "transform" : 'translate(-50%, -50%)',
    "display":"flex",
    'justify-content': 'center',
    "align-items" : 'start',
    "padding": 15 + 'px'
  } )
  $(this).css('visibility', 'hidden')
  $('.search-box').css( {
    "padding": '5px 15px',
    "width" : '250px',
    "border" : '1px solid #FFF'
  } )


  $('.close-search').css( {
    "position": "absolute",
    "right": "20px",
    "color":" #FFF",
    'cursor': 'pointer'
  } )

  $('.search-box .in' ).css( {
    "padding": '5px 15px',
    "width" : "60%",
    "outline" : 'none',
    "background" : 'transparent',
    'color': '#FFF'
  } )
  $('.search-box .btn').css( {
    "padding": '8px 15px',
    "fontWeight":'bold',
    "background" : '#FFF'
  } )
  
  $(document).on('click', ".search svg:nth-child(1)",  function(){
    $(this).parent().remove();
    $('.search-bar').css("visibility", "visible");
  })
})


// landing page section 

let imgs = jQuery.makeArray($('.landing-page .content-img .box')),
  current = 0,
  lastIndex = imgs.length - 1;

  setInterval(function() {
    imgs.forEach(el => el.classList.remove('active'))
    imgs[current].classList.add('active')
    current = (current == lastIndex) ? 0 : current++;
      current ++; 
  }, 6000);

  // comment section
  let comments = jQuery.makeArray($('.customers .customer')),
      currentIndex = 1,
      previous = 0,
      next = 2,
      commentsLength = comments.length - 1;

        setInterval(function() {
    imgs.forEach(el => el.classList.remove('active'))
    imgs[current].classList.add('active')
    current = (current == lastIndex) ? 0 : current++;
      current ++; 
  }, 6000);

      let carouselRuning = true;
      let intervar =setInterval(function() {
        if (carouselRuning) {
          showNextComment();
        }
      }, 4000)

      function showNextComment() {
        if (currentIndex === commentsLength)
          currentIndex = 0;
        else
          currentIndex ++;
          updateState(currentIndex);
      }

      function showComment(event) {
        if ($(event.target).hasClass('customer'))
            var target = $(event.target)
        else
            var target = $(event.target).parent()
            var index = $('.customer').index(target);
            updateState(index)
          }

    function updateState(index) {
      previous = index === 0 ? commentsLength : index - 1;
      currentIndex = index;
      next = index === commentsLength ? 0 :index + 1;
      updateCarouselPosition();
      // setLeftClass();
    }


    function updateCarouselPosition() {
      $('.comment-box').find('.previous').removeClass('previous');
      $('.comment-box').find('.current').removeClass('current');
      $('.comment-box').find('.next').removeClass('next');
      var allComments = $('.comment-box').find('.customer');
      $(allComments[previous]).addClass('previous');
      $(allComments[currentIndex]).addClass('current');
      $(allComments[next]).addClass('next');
    }

/// comment section
let input = '';
$('#input').keypress(function() {
  input = $(this).val();
})
let commentTxt = '';
$('#comment').keypress(function() {
commentTxt = $(this).val();
});

$('#submit-comment').on('click', function() {
  if (input && commentTxt) {
    $(`<div class = "customer"> <div class = "personal"> <img src = "${$('.img .avatar').attr('src')}"/> </div> \ 
    <div class = "comment" > <p> ${commentTxt} </p> </div> <div = class = 'rate'> <i class = 'fa fa-star'> </i> <h4> ${input} </h4> </div></div>`).appendTo($('.comment-box'))
  }
  $('#input').val('')
  $('#comment').val('')
  let msg = $('#msg');
  let msgContent = msg.text();
  $('#msg').text('Thanks For your message')
  setTimeout(() => {
    msg.text(msgContent);
  }, 1000)
  commentsLength++;
});



// Store Comment box in Variale to cash it in Memory
let commentBox = $('.add-comment-box');
// Display comment section
$('.leave-comment').on('click', function () {
  commentBox.fadeIn();
})
// Close Image Section
$('#close-comment').on('click', function() {
  commentBox.fadeOut();
})





// img
let avatar = $('#avatar img');

avatar.on('click', function() {
  $(this).siblings().removeClass('avatar');
  $(this).addClass('avatar')
})
let orderList = [];
// add Item to Array
$('.seller button').on('click', function() {
  $(`<li> ${$(this).siblings('h4').text()} <button id = "button"> Delete </button>`).appendTo($('.order ul'));
})
// Delete item from cart
$(document).on('click', "#button" ,function() {
  $(this).parent().remove();
})
// close cart to cartLiist
$('.order svg').on('click', function() {
  $(this).parent().fadeOut();
})

$('.header svg.cart').on('click', function() {
  $('.order').fadeIn();
})
// Option box gear for Hide and show
$('.gear-box').on('click', function() {
  $('.options-box').toggleClass('hide')
})
// Array for Gradient color
let gradientColor = [];
// all classes Gradient
$('.options-box .color-gradient li').each(function() {
  gradientColor.push($(this).data('gradient'));
});
// all classes natural color
$('.options-box .color li').each(function() {
  gradientColor.push($(this).data('color'));
});

let body = $('body');
// option box color Gradient
$('.options-box .color-gradient li').on('click', function() {
  body.removeClass(gradientColor);
  body.addClass($(this).data('gradient'));
})
console.log(gradientColor)
// option box color Natural color
$('.options-box .color li').on('click', function() {
  body.removeClass(gradientColor);
  body.addClass($(this).data('color'));
})
// remove and add active class
let optionColor = $('.options-box li');
optionColor.on('click', function() {
  optionColor.each(function() {$(this).removeClass('active')})
  $(this).addClass('active')
})
let fonts = [];
$('.options-box select option').each(function() {fonts.push($(this).val())})
// change body font on click
$('.options-box select').on('change', function() {
  body.removeClass(fonts.join('  '))
  body.addClass($(this).find('option:selected').val())
})

});