
$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.cross').css({
    'transform': 'translate(0px, '+ wScroll / 9 +'%)'
  });

  $('.triangle').css({
    'transform': 'translate(0px, '+ wScroll / 9 +'%)'
  });

  $('.circle').css({
    'transform': 'translate(0px, '+ wScroll / 2.1 +'%)'
  });

  $('.circle-2').css({
    'transform': 'translate(0px, '+ wScroll / 4.7 +'%)'
  });

  $('.triangle-2').css({
    'transform': 'translate(0px, '+ wScroll / 1.2 +'%)'
  });

  $('.square').css({
    'transform': 'translate(0px, '+ wScroll / 2.1 +'%)'
  });


  if(wScroll > $('#second').offset().top - ($(window).height() / 2.3)) {
     $('#second').addClass('pink');
     $('#second h1').addClass('red');
  } else {
     $('#second').removeClass('pink');
     $('#second h1').removeClass('red');
  }

  if(wScroll > $('#subscribe').offset().top - ($(window).height() / 1.2)) {
    $('.cross').css({
      'transform': 'translate(0px, 0px)'
    });

    $('.triangle').css({
      'transform': 'translate(0px, 0px)'
    });

    $('.circle').css({
      'transform': 'translate(0px, 0px)'
    });

    $('.circle-2').css({
      'transform': 'translate(0px, 0px)'
    });

    $('.triangle-2').css({
      'transform': 'translate(0px, 0px)'
    });

    $('.square').css({
      'transform': 'translate(0px, 0px)'
    });
  } 


  if(wScroll > $('.milestones').offset().top - ($(window).height() / 1.2)) {

    $('.milestones .milestone-item').each(function(i){

      setTimeout(function(){
        $('.milestones .milestone-item').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });
  }

  if(wScroll > $('.milestones').offset().top - ($(window).height() / 1.2)) {

    $('.milestones .milestone-item').each(function(i){

      setTimeout(function(){
        $('.milestones .milestone-item').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });
  }

  if(wScroll > $('#subscribe').offset().top) {
  		$('#subscribe-two').addClass('.animated .fadeInDown');
  }

});


// var images = new Array ('../../assets/img/me-avatar-2.jpg', '../../assets/img/me-avatar-3.jpg', '../../assets/img/me-avatar.jpg');
// var index = 1;

// function rotateImage()
// {
//   $('.me-avatar').fadeOut('fast', function()
//   {
//     $(this).attr('src', images[index]);

//     $(this).fadeIn('slow', function()
//     {
//       if (index == images.length-1)
//       {
//         index = 0;
//       }
//       else
//       {
//         index++;
//       }
//     });
//   });
// }


// $(document).ready(function() {
//   setInterval (rotateImage, 2500);
// });

// $('.me-avatar').hover(function(){
// 	$(this).attr('src','../../assets/img/me-avatar.jpg');
// 	},
// 	function(){
//      	$(this).attr('src','../../assets/img/me-avatar-2.jpg');},
//      	function(){
//      	$(this).attr('src','../../assets/img/me-avatar-3.jpg');});
