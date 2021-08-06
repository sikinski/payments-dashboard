// main left
const servicesBlock = document.querySelector('.payments-left .services');
console.log(servicesBlock);

const servicesShowAllBtn = document.querySelector('.payments-left .show-all-icon');
console.log(servicesShowAllBtn);

const services = document.querySelectorAll('.payments-left .services .service.hidden');
console.log(services);

servicesShowAllBtn.addEventListener('click', function () {
    for(let service of services) {
        servicesBlock.classList.toggle('services-full');
        service.classList.toggle('hidden');
    }
})

// main right
const showAllAvatarsBtn = document.querySelector('.payment-avatars .avatar.show-more');
const hiddenAvatars = document.querySelectorAll('.payment-avatars .avatar.hidden');
console.log(hiddenAvatars);

showAllAvatarsBtn.addEventListener('click', function() {
    for(avatar of hiddenAvatars) {
        avatar.classList.toggle('hidden');
    }
});