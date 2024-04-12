const toggleBtn = document.getElementById('toggleBtn');
const toggleBtndrop = document.querySelector('.toggle-btn i');
const dropdown = document.querySelector('.dropdown_menu');
const hiddenElements = document.querySelectorAll('.hidden');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.heads');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
        } else {
            entry.target.classList.remove('show');
            entry.target.classList.add('hidden');
        }
    });
});

hiddenElements.forEach(element => {
    observer.observe(element);
});


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
            })
            document.querySelector('.anchors  [href*=' + id + ']').classList.add('active');
        }
    })
}


toggleBtn.onclick = function () {
    dropdown.classList.toggle('open');
    const isOpen = dropdown.classList.contains('open');
    toggleBtndrop.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
};

