document.addEventListener('DOMContentLoaded', () => {
    const qheads = document.querySelectorAll('.qhead');

    qheads.forEach((qhead) => {
        qhead.addEventListener('click', () => {
            const qanswer = qhead.nextElementSibling;

            if (qanswer.classList.contains('appear')) {
                qanswer.classList.remove('appear');
                qanswer.classList.add('disappear');
            } else {
                qanswer.classList.add('appear');
                qanswer.classList.remove('disappear');
            }
        });
    });
});
