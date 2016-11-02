var main = function() {
  $('.btn').click(function() {
    var post = $('.status-box').val();
    $("<li>").text(post).prependTo('.posts');
    $('.status-box').val('');
    $('.counter').text('300');
    $('.btn').addClass('disabled');
  });
  $('.status-box').keypress(function(event) {
    var post = $('.status-box').val();
    if (event.which === 13) {
      event.preventDefault();
      $("<li>").text(post).prependTo('.posts');
      $('.status-box').val('').focus();
      $('.counter').text('300');
    $('.btn').addClass('disabled');
    }
  });
  $('ul').on('click', 'li', function() {
    $(this).remove();
  });
$('.status-box').keyup(function() {
  var postLength = $(this).val().length;
  var charactersLeft = 300 - postLength;
$('.counter').text(charactersLeft);
 if (charactersLeft <0) {
     $('.btn').addClass('disabled');} else if (
         charactersLeft === 300) {
             $('.btn').addClass('disabled');} else { 
                $('.btn').removeClass('disabled')};
});
$('.btn').addClass('disabled');

};

$(document).ready(main);