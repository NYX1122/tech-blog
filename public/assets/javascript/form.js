async function signupHandler() {
    const username = $('#username').val().trim();
    const password = $('#password').val().trim();
    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            //document.location.replace('/dashboard');
        } else {
            response.json().then(function(data) {
                console.log(data);
            })
        }
    } else {
        alert('Please fill out all fields before continuing');
    }
}

async function loginHandler() {
    const username = $('#username').val().trim();
    const password = $('#password').val().trim();
    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log('yas');
            //document.location.replace('/dashboard');
        } else {
            if (response.status === 404) {
                alert('Invalid username');
            } else if (response.status === 400){
                alert('Invalid password');
            } else {
                alert(response.statusText);
            }
        }
    } else {
        alert('Please fill out all fields before coninuing');
    }
}

$('#submit').on('click', function() {
    if ($(this).text() === 'Signup!') {
        signupHandler();
    } else {
        loginHandler();
    }
});