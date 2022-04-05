const firstElement = document.getElementById("name");
const secondElement = document.querySelector("#birthdate");

const addImgButton = document.querySelector("#add-btn");
const increaseImgButton = document.querySelector("#increase-btn");
const decreaseImgButton = document.querySelector("#decrease-btn");
const deleteImgButton = document.querySelector("#delete-btn");
const img = document.querySelector("#barselona");

 const firstElementStyle = {
    background: getComputedStyle(firstElement).backgroundColor,
    color: getComputedStyle(firstElement).color
 };

 const secondElementStyle = {
    background: getComputedStyle(secondElement).backgroundColor,
    color: getComputedStyle(secondElement).color
 };

const disableHighlightingText = element => {element.style.userSelect = "none"}

function colorFirstElement(bgcolor="#F5D421", textcolor="#07299F") {
    disableHighlightingText(firstElement)
    firstElement.style.backgroundColor === firstElementStyle.background
    ? 
    (firstElement.style.backgroundColor = bgcolor,
    firstElement.style.color = textcolor)
    : 
    (firstElement.style.backgroundColor = firstElementStyle.background,
    firstElement.style.color = firstElementStyle.color);
    }

function colorSecondElement(bgcolor = "red", textcolor = "#07299F") {
    disableHighlightingText(secondElement)
    secondElement.style.backgroundColor === secondElementStyle.background
    ? 
    (secondElement.style.backgroundColor = bgcolor,
    secondElement.style.color = textcolor)
    : 
    (secondElement.style.backgroundColor = secondElementStyle.background,
    secondElement.style.color = secondElementStyle.color);
}

increaseImage = () => img.style.width = `${img.width+100}px`;

decreaseImage = () => img.style.width = `${img.width-100}px`;

addImage = () => img.parentNode.insertBefore(img.cloneNode(), img)

deleteImage = () => {
    const parentNode = img.parentNode
    if(parentNode.hasChildNodes()) parentNode.removeChild(parentNode.firstChild)
}

firstElement.addEventListener('click', () => colorFirstElement("#F5D421","#07299F"))
secondElement.addEventListener('click', () => colorSecondElement("#07299F","#F5D421" ))
increaseImgButton.addEventListener('click', () => increaseImage())
decreaseImgButton.addEventListener('click', () => decreaseImage())
addImgButton.addEventListener('click', () => addImage())
deleteImgButton.addEventListener('click', () => deleteImage())
