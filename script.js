const btnElement = document.getElementById('play-button');
const mainElement = document.querySelector('main');
const gridElement = getElement('div', 'grid');
btnElement.addEventListener('click', function(){
    
    mainElement.appendChild(gridElement);
  
        for(let i = 0; i < 100; i++){
            const divElement = getElement('div', 'cell');
            divElement.innerHTML += i + 1;
            gridElement.appendChild(divElement);

            divElement.addEventListener('click', function(){
                divElement.classList.add('active');
                console.log(parseInt(divElement.innerHTML));
                if(divElement.classList.contains('active')){
                    btnElement.addEventListener('click', function(){
                        divElement.classList.remove('active');
                    });
                }
            });
        
    }
});

function getElement(tagName, className){
    const childElement = document.createElement(tagName);
    childElement.classList.add(className);

    return childElement;
}