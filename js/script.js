function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const section = document.getElementById(sectionId);
    section.classList.add('active');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToNextImage(imageId) {
    const image = document.getElementById(imageId);
    image.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
