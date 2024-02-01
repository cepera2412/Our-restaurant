// Menu mobile
function toggleDropdown() {
    var dropdownContent = document.querySelector('.disp');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}

// Modal menu

function openModal() {
    document.getElementById('menu-modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeModal() {
    document.getElementById('menu-modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function submitForm() {
    // Здесь вы можете добавить логику для обработки данных формы
    alert('Форма отправлена! \n Ждите звонка!');
    closeModal();
}

function orderCompleted() {
    // Здесь вы можете добавить логику для обработки данных формы
    alert('Заказ выполнен!');
    closeModal();
}









// const burger = document.querySelector('#burger');
// const menu = document.querySelector('#menu');

// burger.addEventListener('click', () => {
//     menu.classList.toggle(disp);
// });