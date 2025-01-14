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
      commentToggle();
      
    });

    $('.remove-post').on('click', function (e) {
    var $element = $(e.target);
    $element.closest('.full-post').remove();
  });

  var postToComments = function () {
    var $postComments = $('.post-comments');
    var $postNumberRef = parseInt($postNumber); 

    var commentFormTemplate = 
    '<div class="comment-form show">' +
    '<form onsubmit="event.preventDefault();">' +
    '<div class="form-group"><input id="comment-name" type="text" class="form-control commentName" placeholder="Name"></input></div>' +
    '<div class="form-group"> <textarea id="comment-message" type="text" class="form-control commentMessage" placeholder="Message"></textarea></div>' +
    '<button id="submit-comment" class="btn btn-primary">' + 
    'Comment' + 
    '</button></form>' +
    '</div>'
    ;

  $postComments.append(commentFormTemplate);

    $('#submit-comment').on('click', function (e) {
    var commentsList = $('.full-comment');
    $logComment();
    viewComments();
            
    });

    var $logComment = function () {
      var $commentMessage = $('.commentMessage').val();
      var $commentName = $('.commentName').val();
      var newComments = {
        commentMessage: $commentMessage,
        commentName: $commentName
      };
  
      availablePosts[$postNumberRef - 1].comments.push(newComments);
    };

  


  var viewComments = function () {
    var $commentMessage = $('.commentMessage').val();
    var $commentName = $('.commentName').val();
    var $viewComments = $('.view-comments');
    var $postNumberRef = parseInt($postNumber);

 
  

  var commentTemplate = 
  // function ($commentName, $commentMessage) {
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
  // };

  $viewComments.append(commentTemplate);

  // Loop through Comment Array of associated Post object to display all comments

  // for (var i = 0; i < availablePosts[$postNumberRef - 1].comments.length; i++) {
  //     var $commentList = commentTemplate(availablePosts  [$postNumberRef - 1].comments[i].commentMessage, availablePosts[$postNumberRef - 1].comments[i].commentName);
  //     console.log($commentList);
  //     $viewComments.append($commentList);
  //   } 

  
    $('.remove-comment').on('click', function (e) {
      var $element = $(e.target);
      $element.closest('.full-comment').remove();
    });
  };
  };

  var commentToggle = function() {
    // If Else (Shopping Cart) Show/Hide Comments & Form

    // var $postNumberRef = parseInt($postNumber);
    // var availableComments = parseInt(availablePosts[$postNumberRef - 1].comments.length);
    // var commentsForm = $('.full-post').find('.post-comments');
    // console.log(commentsForm.className); 
    // var commentsView = $('.full-post').find('.view-comments');
    // console.log(commentsView);

    // Toggle Comment View & Form
    // 1 If Comments array empty, do not show View only show Post
    // 2 If Comments array is not empty, show both View & Post
    // 3 If View or Post = show, hide

    // commentsForm.className += ' show';
    // console.log(commentsForm.className);
    // commentsView.className += ' show';

    postToComments();
  };

};


$('#submit').on('click', function () {
  createPost();
});