const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const emailList = document.getElementById('email-list');
const form = document.querySelector('form');

tenMails(endpoint);

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.clear();
    tenMails(endpoint);

})

// funzione
function tenMails(urlApi) {

    let emails = '';

    for (let i = 1; i <= 10; i++) {
        axios.get(urlApi)
            .then((response) => {
                let email = response.data.response;
                console.log(email);

                emails += `<li class="list-group-item">${email}</li>`;

                emailList.innerHTML = emails;

            })
            .catch(error => {
                console.log('error:', error);
            });
    }
}