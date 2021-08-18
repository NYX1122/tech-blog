async function newCommentHandler() {
    text = $('textarea').val().trim();
    post_id = window.location.toString().split('/')[4];
    
    if(text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                text,
                post_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    } else {
        alert('Please fill out all fields before clicking submit');
    }
}

$('#new-comment').on('click', function() {
    $(this).remove();
    $('#container').addClass('border border-5 border-info');
    const label = $('<label>').addClass('col fs-4').html('Comment');
    const labelRow = $('<div>').addClass('row');
    const text = $('<textarea>').addClass('col mx-3 mb-3 form-control');
    const textRow = $('<div>').addClass('row');
    const button = $('<button>').addClass('col mx-3 mb-3 btn btn-info').attr('id', 'submit-comment').html('Submit');
    const buttonRow = $('<div>').addClass('row');
    labelRow.append(label);
    textRow.append(text);
    buttonRow.append(button);
    $('#row').after(labelRow, textRow, buttonRow);
    $('#submit-comment').on('click', newCommentHandler);
});