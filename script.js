// Dodaj obsługę kliknięcia przycisku
document.getElementById("toggleButton").addEventListener("click", function() {
    // Dodaj lub usuń klasę "active", aby pokazać lub ukryć wysuwany div
    document.getElementById("slideDiv").classList.toggle("active");
});

document.getElementById("toggleButton2").addEventListener("click", function() {
    document.getElementById("slideDiv2").classList.toggle("active");
});

document.getElementById("toggleButton3").addEventListener("click", function() {
    document.getElementById("slideDiv3").classList.toggle("active");
});

document.getElementById("toggleButton4").addEventListener("click", function() {
    document.getElementById("slideDiv4").classList.toggle("active");
});

document.getElementById("toggleButton5").addEventListener("click", function() {
    document.getElementById("slideDiv5").classList.toggle("active");
});

document.getElementById("toggleButton6").addEventListener("click", function() {
    document.getElementById("slideDiv6").classList.toggle("active");
});
