document.querySelectorAll('.left').forEach((leftArrow, index) => {
    leftArrow.addEventListener('click', () => {
        const gallery = document.querySelectorAll('.gallery')[index];
        gallery.scrollLeft -= 100
    });
});

document.querySelectorAll('.right').forEach((rightArrow, index) => {
    rightArrow.addEventListener('click', () => {
        const gallery = document.querySelectorAll('.gallery')[index];
        gallery.scrollLeft += 100;
    });
});
