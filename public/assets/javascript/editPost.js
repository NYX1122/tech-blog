async function updatePostHandler() {
    const title = $('#title').val().trim();
    const contents = $('#content').val().trim();
    const id = window.location.toString().split('/')[5];

    if(title && content) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                contents,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    } else {
        alert('Please fill out all fields before continuing');
    }
}

async function deletePostHandler() {
    const id = window.location.toString().split('/')[5];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

$('#button').on('click', updatePostHandler);
$('#button-delete').on('click', deletePostHandler);