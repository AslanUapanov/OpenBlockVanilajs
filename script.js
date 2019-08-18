element = document.querySelector('#openbox');
boxelement = document.querySelector('.box');
element.addEventListener('click', function(){
    boxelement.style.display = (boxelement.style.display == 'block') ? 'none' : 'block';
});

