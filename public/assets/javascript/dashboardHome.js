const newPostButtonHandler = () => {
    document.location.replace('/dashboard/new-post');
}

const postButtonHandler = () => {
    
    //document.location.replace('/dashboard/edit-post/' + $(this).attr('id'));
}

$('#new-post').on('click', newPostButtonHandler);
$('.container').on('click', function() {
    document.location.replace(`/dashboard/edit-post/${$(this).attr('id')}`);
});