
const form = document.querySelector('.login-form')

form.addEventListener('submit', (onFormSubmit) => {
    onFormSubmit.preventDefault();


    const {
        elements: {
            email,
            password
        }
    } = onFormSubmit.currentTarget;

      if (email.value == 0 || password.value == 0 ) {
       
        return alert('У формі є незаповнені поля');
    } 
    console.log({'email': email.value, 'password': password.value})
 ,

     document.querySelector('.login-form').reset();
});

