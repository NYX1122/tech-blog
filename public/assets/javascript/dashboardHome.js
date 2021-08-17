const newPostButtonHandler = () => {
    document.location.replace('/dashboard/new-post');
}

const postButtonHandler = () => {
    document.location.replace('/dashboard/edit-post');
}

$('#new-post').on('click', newPostButtonHandler);
$('.container').on('click', postButtonHandler);