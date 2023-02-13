document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const passwordField = document.getElementById('user-password');
    const email = emailField.value;
    const password = passwordField.value;

    if(email === 'yeasin@rafee.com' && password === 'hellomello'){
        window.location.href = './account.html';
    }else{
        console.log('Not varified');
    }
})