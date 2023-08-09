const divbtn = document.getElementById("btncontainer");
const btn = document.getElementById('btnsaludar');

btn.addEventListener('click', function btn() {
    alert('Hola!');
    event.stopPropagation();
});

divbtn.addEventListener('click', function alertd() {
    alert('Hola! Soy el div');
});