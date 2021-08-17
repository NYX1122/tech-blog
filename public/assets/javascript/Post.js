async function newPostHandler () {
    const title = $('#title').val().trim();
    const contents = $('#content').val().trim();
    const user_id = $('#button').attr('user');

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                contents,
                user_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    } else {
        alert('Please fill out all forms before continuing');
    }
}

$('#button').on('click', newPostHandler);