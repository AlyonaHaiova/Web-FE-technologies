const colorPicker = document.querySelector('#colorPicker')
const cell10 = document.querySelector('#cell10')

function random(number){
    return Math.floor(Math.random()*number);;
}
function randomColor(){
    return 'rgb('+random(255)+','+random(255)+','+random(255)+')';
}

cell10.addEventListener("mouseover", function( event ) {
    event.target.style.backgroundColor = randomColor();
}, false);


cell10.addEventListener("click", function( event ) {
    event.target.style.backgroundColor = colorPicker.value;
}, false);


cell10.addEventListener("dblclick", function( event ) {
    const cell12 = document.querySelector('#cell12')
    cell10.style.backgroundColor = colorPicker.value;
    cell12.style.backgroundColor = colorPicker.value;
}, false);
