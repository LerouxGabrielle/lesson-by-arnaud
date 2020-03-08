var add = document.getElementById("add");
var sub = document.getElementById("sub");
var mult = document.getElementById("mult");
var div = document.getElementById("div");


function addition(){
    var n1 = document.getElementById("nombre1").value;
    var entier_n1 = Number(n1);

    var n2 = document.getElementById("nombre2").value;
    var entier_n2 = Number(n2);

    var total = entier_n1 + entier_n2;
   
    console.log(total);
    document.write(n1 + "+" + n2 + "=" + total);
}
add.addEventListener("click", addition);


function sous(){
    var n1 = document.getElementById("nombre1").value;
    var entier_n1 = Number(n1);

    var n2 = document.getElementById("nombre2").value;
    var entier_n2 = Number(n2);

    var total = entier_n1 - entier_n2;

    console.log(total);
    document.write(n1 + "-" + n2 + "=" + total);
}
sub.addEventListener("click", sous);

function multi(){
    var n1 = document.getElementById("nombre1").value;
    var entier_n1 = Number(n1);

    var n2 = document.getElementById("nombre2").value;
    var entier_n2 = Number(n2);

    var total = entier_n1 * entier_n2;

    console.log(total);
    document.write(n1 + "x" + n2 + "=" + total);
}
mult.addEventListener("click", multi);

function divi(){
    var n1 = document.getElementById("nombre1").value;
    var entier_n1 = Number(n1);

    var n2 = document.getElementById("nombre2").value;
    var entier_n2 = Number(n2);
    
    var total = entier_n1 / entier_n2;

    console.log(total);
    document.write(n1 + "/" + n2 + "=" + total);
}
div.addEventListener("click", divi);
