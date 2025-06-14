// // Write your code here!

//remove the <main> element
document.querySelector('main').remove();

// create a new <h1> element
const newHeader = document.createElement('h1');

//set the newHeader to 'victory'
newHeader.id = 'victory';

//addan innerHTML
newHeader.innerHTML= 'Brench is the champion';

//add the newHeader to the body
document.body.appendChild(newHeader);
