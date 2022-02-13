var availablePosts = posts;

var createPost = function (postMessage, postName) {
  var $postMessage = $('.postMessage').val();
  var $postName = $('.postName').val();
  var $viewPosts = $('.view-posts');

  var newPost = {
    message: $postMessage,
    name: $postName,
    comments: []
  };

  posts.push(newPost);

  for (var i = 0; i < posts.length; i++) {
    var $postNumber = i + 1;
  }

  var postTemplate = 
    '<table class="full-post data-post-number="' + $postNumber + '">' +
    '<tr class="post">' +
      '<td class="post-number">' + $postNumber + ' </td>' +
      '<td class="text-of-post">' + $postMessage + ' </td>' +
      '<td class="name-of-post">' + ' - posted by: ' + $postName + 
      '</td>' +
      '<td class="post-actions">' + 
        '<a class="remove-post">' + 'Delete' + '</a>' + 
        '&nbsp;//&nbsp;' +
        '<a class="comment-on-post">' + 'Comments' + '</a>' +
      '</td>' + 
    '</tr>' +
    '<tr class="view-comments">' +
    '</tr>' +
    '<tr class="post-comments">' +
    '</tr>'+
    '</table>'
    ;

  $viewPosts.append(postTemplate);

  $('.view-posts').on('click','.comment-on-post', function () {
    console.log(availablePosts);
    var $postNumberRef = parseInt($postNumber);
    // Toggle Comment View & Form
    // 1 If Comments array empty, do not show View only show Post
    // 2 If Comments array is not empty, show both View & Post
    // 3 If View or Post = show, hide
    //viewComments();
    postToComments();
  });

  
  $('.remove-post').on('click', function (e) {
    var $element = $(e.target);
    $element.closest('.full-post').remove();
  });

var postToComments = function () {
  var $postComments = $('.post-comments');
  var $postNumberRef = parseInt($postNumber); 

  var commentFormTemplate = 
    '<div>' +
    '<form onsubmit="event.preventDefault();">' +
    '<h5>' + 
    'Add a new comment' + 
    '</h5>' + 
    '<div class="form-group"><input id="comment-name" type="text" class="form-control commentName" placeholder="Name"></input></div>' +
    '<div class="form-group"> <textarea id="comment-message" type="text" class="form-control commentMessage" placeholder="Message"></textarea></div>' +
    '<button id="submit-comment" class="btn btn-primary">' + 
    'Comment' + 
    '</button></form>' +
    '</div>'
    ;

  $postComments.append(commentFormTemplate);

  $('#submit-comment').on('click', function (e) {
    viewComments();
    $logComment();
        
  });

  var $logComment = function () {
    // How to associate Comment with Post? Retrieve Post-Number?
    var $commentMessage = $('.commentMessage').val();
    var $commentName = $('.commentName').val();
    var newComments = {
      commentMessage: $commentMessage,
      commentName: $commentName
    };
  
    availablePosts[$postNumberRef - 1].comments.push(newComments);
  };
};


var viewComments = function () {
  var $commentMessage = $('.commentMessage').val();
  var $commentName = $('.commentName').val();
  var $viewComments = $('.view-comments');
  

  var commentTemplate = 
    '<table class="full-comment">' +
    '<tr class="comment">' +
      '<td class="the-commenter">' + $commentName + ' commented: ' + '</td>' +
      '<td class="the-comment">' +
        $commentMessage + 
      '</td>' + 
      '<td class="comment-actions">' + 
        '<a class="remove-comment">' + 'Delete' + '</a>' + 
      '</td>' +
    '</tr>' 
    '</table>'
    ;

  $viewComments.append(commentTemplate);

  $('.remove-comment').on('click', function (e) {
    var $element = $(e.target);
    $element.closest('.full-comment').remove();
  });
};
};



$('#submit').on('click', function () {
  createPost();
});