const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const emailList = document.getElementById('email-list');
let emails = '';

for (i = 1; i <= 10; i++) {

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