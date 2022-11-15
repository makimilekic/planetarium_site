var ime = document.getElementById("ime");
var email = document.getElementById("email");
var izbor = document.getElementById("izbor");
var dugme = document.getElementById("dugmeSubmit");

dugme.addEventListener("click", function(e) {
    e.preventDefault();
    confirm("Potvrdite unete podatke. Ime: " + ime.value + ", email: " + email.value + ", povod upita: " + izbor.value);
})