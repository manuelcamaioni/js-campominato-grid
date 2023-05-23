const btnElement = document.getElementById('play-button');
const gridElement = document.getElementById('grid');



btnElement.addEventListener('click', function(){
    
    gridElement.classList.toggle('grid');

    for(let i = 0; i<100; i++){

        const divElement = getElements('div', 'cell');
        divElement.innerHTML += i + 1;
        gridElement.appendChild(divElement);

        divElement.addEventListener('click', function(){
            divElement.classList.toggle('active');
            console.log(divElement.innerHTML);
        });
    }

});


function getElements(tagName, className){
    const childElement = document.createElement(tagName);
    childElement.classList.add(className);

    return childElement;
}