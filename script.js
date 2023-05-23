const btnElement = document.getElementById('play-button');
const mainElement = document.querySelector('main');
const gridElement = getElement('div', 'grid'); // creates a div with class='grid'

btnElement.addEventListener('click', function(){
    
    mainElement.appendChild(gridElement);
  
        for(let i = 0; i < 100; i++){ // creates 100 cells displayed in the div.grid parent
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

/**
 * 
 * Creates a DOM element
 * 
 * @param {string} tagName // write a string, it'll be implemented as a Node in html
 * @param {string} className  // write a class you want your tag to have
 * @returns a html node with given class
 */
function getElement(tagName, className){
    const childElement = document.createElement(tagName);
    childElement.classList.add(className);

    return childElement;
}