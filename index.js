// Write your code here!
const mainElement = document.querySelector('main#main');
mainElement.remove();

const newHeader = document.createElement('h1');

newHeader.id = 'victory';

newHeader.textContent = 'STEVEN is the champion';