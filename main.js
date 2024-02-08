const button = document.querySelector('.form__button');
const input = document.querySelector('.form__input');
const form = document.querySelector('.form');
const success = document.querySelector('.success');
const main_article = document.querySelector('.main_article');
const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

button.addEventListener('click', e => {
    let confirm = false;
    const value = input.value;
    const validation = document.querySelector('.validation');


    if (value.length > 0) {
        validation.innerText = '';

        if (value.match(validRegex)) {
            confirm = true;
        }

        if (!confirm) {
            input.style.border = '2px solid red';
            validation.innerText = 'Invalid email';
        }
        else {
            input.style.border = '2px solid gray';
            validation.innerText = '';
            main_article.style.visibility = 'hidden';
            success.style.visibility = 'visible';

            document.querySelector('.email').innerText = value;
        }
    } else {
        validation.innerText = 'The field is left empty';
        input.style.border = '2px solid red';
    }
});


const dismiss = document.querySelector('.success__button');

dismiss.addEventListener('click', e => {
    success.style.visibility = 'hidden';
    main_article.style.visibility = 'visible';
});
