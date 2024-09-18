window.onscroll = function () {
    var button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

document.getElementById("back-to-top").onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.addEventListener('scroll', function () {
    var elements = document.querySelectorAll('.service-item, .large-team-member, .small-team-member, .recent-projects');
    var windowHeight = window.innerHeight;

    elements.forEach(function (element) {
        var position = element.getBoundingClientRect().top;

        if (position < windowHeight - 100) {
            element.classList.add('bounce-effect');
        } else {
            element.classList.remove('bounce-effect');
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const paginationLinks = document.querySelectorAll('.pagination-page');
    const serviceItems = document.querySelectorAll('.service-item, .project-item');
    const prevButton = document.querySelector('.pagination-prev');
    const nextButton = document.querySelector('.pagination-next');
    let currentPage = 1;

    function updatePagination(page) {
        paginationLinks.forEach(link => link.classList.remove('active'));
        paginationLinks[page - 1].classList.add('active');
        serviceItems.forEach(item => {
            item.style.opacity = 0;
            setTimeout(() => {
                item.style.opacity = 1;
            }, 300);
        });
    }

    paginationLinks.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            currentPage = index + 1;
            updatePagination(currentPage);
        });
    });

    prevButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            updatePagination(currentPage);
        }
    });

    nextButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (currentPage < paginationLinks.length) {
            currentPage++;
            updatePagination(currentPage);
        }
    });

    updatePagination(currentPage);
});
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');

    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
}