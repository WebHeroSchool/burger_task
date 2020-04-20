const menu = document.querySelector('#hamburger');

menu.addEventListener('click', function(e){
  e.preventDefault();
  menu.classList.toggle('active');
});


