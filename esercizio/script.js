const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const emailList = document.getElementById('email-list');
const form = document.querySelector('form');



tenMails();

form.addEventListener('submit', function (event) {
    event.preventDefault();

    tenMails()
})


// funzione
function tenMails(){

    let emails = '';

    for (let i = 1; i <= 10; i++) {
        axios.get(endpoint)
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