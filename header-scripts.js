const searchBtn = document.querySelector('.menu-buttons button .fas');
console.log(searchBtn);
const searchInput = document.querySelector('.menu-buttons .search');
console.log(searchInput);
const pageWidth = document.documentElement.scrollWidth;
console.log(pageWidth);


{
    searchBtn.addEventListener('click', function () {
        searchInput.classList.toggle('hidden');
    })
}
