const collapseButton = document.querySelector('.collapse-button');
const collapseField = document.querySelector('.collapse-field');

collapseButton.addEventListener('click', () => {
    collapseField.classList.toggle('opening');
});