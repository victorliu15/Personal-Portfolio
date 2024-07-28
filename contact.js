document.getElementById('copyEmail').addEventListener('click', function() {
    const email = this.getAttribute('data-email');
    const textarea = document.createElement('textarea');
    textarea.value = email;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');
    popup.classList.add('block');
    setTimeout(function() {
        popup.classList.remove('block');
        popup.classList.add('hidden');
    }, 2000);
});
document.getElementById('copyPhone').addEventListener('click', function() {
    const phone = this.getAttribute('data-phone');
    const textarea = document.createElement('textarea');
    textarea.value = phone;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');
    popup.classList.add('block');
    setTimeout(function() {
        popup.classList.remove('block');
        popup.classList.add('hidden');
    }, 2000);
});
document.getElementById('copyLinkedIn').addEventListener('click', function() {
    const linkedin = this.getAttribute('data-linkedin');
    const textarea = document.createElement('textarea');
    textarea.value = linkedin;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');
    popup.classList.add('block');
    setTimeout(function() {
        popup.classList.remove('block');
        popup.classList.add('hidden');
    }, 2000);
});
document.getElementById('copyGithub').addEventListener('click', function() {
    const github = this.getAttribute('data-github');
    const textarea = document.createElement('textarea');
    textarea.value = github;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');
    popup.classList.add('block');
    setTimeout(function() {
        popup.classList.remove('block');
        popup.classList.add('hidden');
    }, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
    
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        if (firstName != "" && lastName != "" && email != "" && message != "") {
            emailjs.send("service_hr75rbf", "template_kuhpxmd", {
                from_name: firstName + " " + lastName,
                from_email: email,
                message: message,
            }).then(function(response) {
                const popup = document.getElementById('sentPopup');
                popup.classList.remove('hidden');
                popup.classList.add('block');
                setTimeout(function() {
                    popup.classList.remove('block');
                    popup.classList.add('hidden');
                }, 2000);
                document.getElementById("firstName").value = "";
                document.getElementById("lastName").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
            });
        }
        else {
            const popup = document.getElementById('errorPopup');
            popup.classList.remove('hidden');
            popup.classList.add('block');
            setTimeout(function() {
                popup.classList.remove('block');
                popup.classList.add('hidden');
            }, 2000);
        }
    });
  });
  