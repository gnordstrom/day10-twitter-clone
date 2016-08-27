$(document).ready(function() {
  $('.stats').hide();
  $('.reply').hide();

// Part 1.1 + 1.2
  $('.tweet-compose').on('click', function(e){
    var box = $('.tweet-compose').height();
    $('.tweet-compose').css('height', box * 2);
    $('#tweet-controls').show();
  });

// Part 2.1 & 2.2
  $('stream').on('click','tweet',function(){
  	$(this).find('.stats').show();
  	$(this).find('.reply').show();
  });

  $('stream').on('click','tweet',function(){
  });

// Part 1.3
  $('.tweet-compose').on('keyup', function(){
    var count = $('.tweet-compose').val().length;
    var remaining = 140 - count;

    $('#char-count').text(remaining);

    if (remaining <= 10) {
      $('#char-count').css('color', 'red');
    }
    else if (remaining > 10) {
      $('#char-count').css('color', '#999');
    }

    if (count > 140) {
      $('.button').attr('disabled', 'disabled');
    } else if (count <= 140) {
      $('.button').removeAttr('disabled', 'disabled');
    }
  });

  $('.button').on('click', function(e){
  	var el = $('.tweet:first').clone();
  	el.find('.avatar').prop('src','img/alagoon.jpg');
  	el.find('.fullname').html('Gustav Nordstrom');
  	el.find('.username').html('@gnordstrom');
  	el.find('.tweet-text').html($('.tweet-compose').val());
  	$('#stream').prepend(el);

});







});
