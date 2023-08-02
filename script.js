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

document.getElementById("buttonmenu1").addEventListener("click", function() {
    document.getElementById("menu1").classList.toggle("active");
});

document.getElementById("toggleButton7").addEventListener("click", function() {
    document.getElementById("slideDiv7").classList.toggle("active");
});

    // Dark mode and Light mode 

let mode = False;

// [mode] it will be definition of witch 
// mode is on and witch mode is off 
// it will be somethink like this 
// if mode = False 
//     LightBtn();
// if mode = True
//     DarkBtn();

let BtnC = document.getElementById("LightBtn").style.backgroundColor;

function LightBtn() {


    // Tło i tekst oraz listy
        document.getElementById("site").style.backgroundColor = "white";
        document.getElementById("site").style.color = "Black";
        document.getElementById("slideDiv").style.backgroundColor = "White";
        document.getElementById("menu1").style.backgroundColor = "White";
        document.getElementById("slideDiv2").style.backgroundColor = "White";
        document.getElementById("slideDiv3").style.backgroundColor = "White";
        document.getElementById("slideDiv4").style.backgroundColor = "White";
        document.getElementById("slideDiv5").style.backgroundColor = "White";
        document.getElementById("slideDiv6").style.backgroundColor = "White";
  
 
        

        //Buttons 

        document.getElementById("buttonmenu1").style.backgroundColor = "White";
        document.getElementById("toggleButton").style.backgroundColor = "White"; 
        document.getElementById("toggleButton2").style.backgroundColor = "White";
        document.getElementById("toggleButton3").style.backgroundColor = "White";
        document.getElementById("toggleButton4").style.backgroundColor = "White";
        document.getElementById("toggleButton5").style.backgroundColor = "White";
        document.getElementById("toggleButton6").style.backgroundColor = "White";
        document.getElementById("toggleButton7").style.backgroundColor = "White";

        document.getElementById("toggleButton").style.color = "Black"; 
        document.getElementById("buttonmenu1").style.color = "Black";
        document.getElementById("toggleButton2").style.color = "Black";
        document.getElementById("toggleButton3").style.color = "Black";
        document.getElementById("toggleButton4").style.color = "Black";
        document.getElementById("toggleButton5").style.color = "Black";
        document.getElementById("toggleButton6").style.color = "Black";
        document.getElementById("toggleButton7").style.color = "Black";
    // BtnC = "White";
    // if (BtnC === "White")
    // {
    //     document.getElementById("site").innerHTML = "Nic";
    // }

}

function DarkBtn() {

    // Main site changing to darker
    //tło tekst i listy
    document.getElementById("site").style.backgroundColor = "Black";
    document.getElementById("site").style.color = "White";

    document.getElementById("slideDiv").style.backgroundColor = "Black";
    document.getElementById("menu1").style.backgroundColor = "Black";
    document.getElementById("slideDiv2").style.backgroundColor = "Black";
    document.getElementById("slideDiv3").style.backgroundColor = "Black";
    document.getElementById("slideDiv4").style.backgroundColor = "Black";
    document.getElementById("slideDiv5").style.backgroundColor = "Black";
    document.getElementById("slideDiv6").style.backgroundColor = "Black";

    //Buttons 
    document.getElementById("toggleButton").style.backgroundColor = "Black"; 
    document.getElementById("buttonmenu1").style.backgroundColor = "Black";
    document.getElementById("toggleButton2").style.backgroundColor = "Black";
    document.getElementById("toggleButton3").style.backgroundColor = "Black";
    document.getElementById("toggleButton4").style.backgroundColor = "Black";
    document.getElementById("toggleButton5").style.backgroundColor = "Black";
    document.getElementById("toggleButton6").style.backgroundColor = "Black";
    document.getElementById("toggleButton7").style.backgroundColor = "Black";

    document.getElementById("toggleButton").style.color = "White"; 
    document.getElementById("buttonmenu1").style.color = "White";
    document.getElementById("toggleButton2").style.color = "White";
    document.getElementById("toggleButton3").style.color = "White";
    document.getElementById("toggleButton4").style.color = "White";
    document.getElementById("toggleButton5").style.color = "White";
    document.getElementById("toggleButton6").style.color = "White";
    document.getElementById("toggleButton7").style.color = "White";

}