const form = document.querySelector('form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');
AOS.init();

const sendEmail = () => {

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "adniyayousaf92@gmail.com",
        Password: "FE48B2D25C7210E3927CA1EA97F1E0A7E385",
        To: 'adniyayousaf92@gmail.com',
        From: email.value,
        Subject: subject.value,
        Body: message
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Thank YOU!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(email.value, subject.value, message.value);
    sendEmail();
})