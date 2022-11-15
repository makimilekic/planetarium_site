var ime = document.getElementById("ime");
var dugme = document.getElementById("dugmeSubmit");

dugme.addEventListener("click", function(e) {
    e.preventDefault();
    alert(ime.value + ", uspešno ste se prijavili. Vidimo se!");
})