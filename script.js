const btnElement = document.getElementById('play-button');

btnElement.addEventListener('click', function(){
    const gridElement = document.getElementById('grid');
    gridElement.classList.toggle('grid');
});