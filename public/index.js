document.addEventListener('DOMContentLoaded', function () {
    var chapterButtons = document.querySelectorAll('.chapter-btn');

    chapterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
