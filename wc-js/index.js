import './dropdown.js';

const dropdown = document.querySelector('x-dropdown');
dropdown.title = 'Custom Title';

dropdown.addEventListener('showChange', e => console.log(e));
setTimeout(() => dropdown.title = 'New Custom Title', 3000);