function closeM (modalSelector) {
    const modalWindow = document.querySelector(modalSelector);
    modalWindow.style.display = 'none';
    document.body.style.overflow = '';
}
function openM (modalSelector, modalTimerId) {
    const modalWindow = document.querySelector(modalSelector);
    modalWindow.style.display = 'block';
    document.body.style.overflow = 'hidden';
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }

}
function modal (triggerSelector, modalSelector, modalTimerId) {
    const modalBut = document.querySelectorAll(triggerSelector),
                     modalWindow = document.querySelector(modalSelector);

    modalBut.forEach((item, i) => {
        item.addEventListener('click', () => openM(modalSelector, modalTimerId));
    });
    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow || e.target.getAttribute('data-close') == '') {
            closeM(modalSelector);
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            closeM(modalSelector);
        }
    });

    function showModalByScroll () {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openM(modalSelector, modalTimerId);
            window.removeEventListener ('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}
export default modal;
export {openM};
export {closeM};