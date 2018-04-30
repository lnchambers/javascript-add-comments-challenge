$(document).ready(function(){
  $('#new_comment_button').click(function () {
    $('new_comment_button').hide();
    var body = '<textarea name="comment_body"></textarea>'
    var author = '<input name="author" type="text"></input>'
    var submit = '<input id="comment-submit" name="submit" type="submit"></input>'
    var form = `<form id="new_comment">${body}<p>${author}</p><p>${submit}</p></form>`
    $(form).appendTo('#comments')
  });

   $('#comments').on('click', '#comment-submit', function(event) {
    event.preventDefault();
    var body = $('textarea[name=comment_body]').val();
    var author = $('input[name=author]').val();
    var newComment = `<li>${body}<span class="author">${author}</span></li>`
    if (body) {
      $(newComment).appendTo('#comment_list');
      $('#new_comment').remove();
    };
  });
});
