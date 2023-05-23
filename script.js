const btnElement = document.getElementById('play-button');

btnElement.addEventListener('click', function(){
    const gridElement = document.getElementById('grid');
    gridElement.classList.toggle('grid');
});

function createChildElements (tagName, className){
    const childElement = document.createElement(tagName);
    childElement.classList.add(className);
}