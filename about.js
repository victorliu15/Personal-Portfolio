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
document.getElementById('copyDevpost').addEventListener('click', function() {
    const devpost = this.getAttribute('data-devpost');
    const textarea = document.createElement('textarea');
    textarea.value = devpost;
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