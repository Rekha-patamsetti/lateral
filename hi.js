
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phno = document.getElementById('phno').value;
    var dob = document.getElementById('dob').value;
    var password = document.getElementById('password').value;

    if (name === '' || email === '' || phno === '' || dob === '' || password === '') {
        document.getElementById('error-message').innerText = 'All fields are required';
    } else {
        document.getElementById('error-message').innerText = '';
        alert('Registration successful!');
    }
}


