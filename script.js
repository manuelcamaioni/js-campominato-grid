const btnElement = document.getElementById('play-button');
const mainElement = document.querySelector('main');

btnElement.addEventListener('click', function(){
    const gridElement = getElement('div', 'grid');
    mainElement.appendChild(gridElement);
  
        for(let i = 0; i < 100; i++){
            const divElement = getElement('div', 'cell');
            divElement.innerHTML += i + 1;
            gridElement.appendChild(divElement);

            divElement.addEventListener('click', function(){
                divElement.classList.add('active');
                console.log(parseInt(divElement.innerHTML));
            });
        
    }
});

function getElement(tagName, className){
    const childElement = document.createElement(tagName);
    childElement.classList.add(className);

    return childElement;
}