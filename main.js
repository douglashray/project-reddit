var posts = [];

var createPost = function (postMessage, postName) {
  //var $submitPost = $("#button");
  var $postMessage = $('.postMessage').val();
  var $postName = $('.postName').val();
  var $viewPosts = $('.view-posts');
  
  var postTemplate = 
    '<tr class="post">' +
      '<td class="text-of-post">' + $postMessage + ' </td>' +
      '<td class="name-of-post">' + ' - posted by: ' + $postName + 
      '</td>' +
      '<td class="post-actions">' + 
        '<a class="remove-post">' + 'Delete' + '</a>' + 
        '&nbsp;//&nbsp;' +
        '<a class="comment-on-post">' + 'Comments' + '</a>' +
      '</td>' + 
    '</tr>' +
    '<tr>' +
      '<td class="comment-post">'
        '<div class="view-comments">'+
        '</div>' +
      '</td>' +
    '</tr>'
    ;

  $viewPosts.append(postTemplate);

  $('.comment-on-post').on('click', function () {
    
    viewComments();
  });

  
  $('.remove-post').on('click', function (e) {
    var $element = $(e.target);
    $element.closest('.post').remove();
  });

};

var viewComments = function () {
  var $postMessage = $('.postMessage').val();
  var $postName = $('.postName').val();
  var $viewComments = $('.view-comments');

  console.log('click');



  var commentFormTemplate = 
    '<p>' + 'Comment Form' + '</p>' +
    '<form style="margin-top:30px;" onsubmit="event.preventDefault();">' +
    '<h5>' + 
    'Add a new post' + 
    '</h5> <div class="form-group"><input id="name" type="text" class="form-control commentName" placeholder="Name"></input></div>' +
    '<div class="form-group"> <textarea id="message" type="text" class="form-control commentMessage" placeholder="Message"></textarea></div>' +
    '<button id="submit" class="btn btn-primary">' + 'Comment' + '</button>' +
    '</form>'
    ;

    $viewComments.append(commentFormTemplate);
};

var postComment = function () {
  var commentTemplate = 
    '<tr class="post">' +
      '<td class="text-of-post">' + $postMessage + ' </td>' +
      '<p>'+
      '<td class="name-of-post">' + ' - posted by: ' + $postName + 
      '</td>' + '</p>' +
      '<td class="remove-action">' + 
    '&nbsp;&nbsp;&nbsp;' + 
    '<a class="remove-post">' +
    'delete' +
    '</a>' +
    '</td>' +
    '</tr>' 
    ;

  $viewPosts.append(postTemplate);

  
};

var deletePost = function (e) {
  console.log('click');
  

};


$('button').on('click', function () {
  // var text = $('#message').val();
  
  // alert(text);

  createPost();
});


