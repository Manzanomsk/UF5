function validar(){
    var psswd=document.getElementById("psswd").value;
    var confpsswd=document.getElementById("confpsswd").value;
    if(psswd==confpsswd){
    alert("Coincideix");
    return false;
    }
    else{
    alert("No coincideix");
    return false;
    }
    }

function guardarDades(){
    var nom = document.getElementById("nom2").value;
    var cognom = document.getElementById("cognom2").value;
    localStorage.setItem("nom", nom);
    localStorage.setItem("cognom", cognom);
}

function recuperarDades(){                       
        var nom = localStorage.getItem("nom");
        var cognom = localStorage.getItem("cognom");
        document.getElementById("nom2").value =`${nom}`;
        document.getElementById("cognom2").value = `${cognom}`; 
    }
function esborrarDades() {
    var nom = document.getElementById("nom2").value;
    var cognom = document.getElementById("cognom2").value;
    document.getElementById("nom2").value = "";
    document.getElementById("cognom2").value = "";
}

function guardarnum(){
    var num1 = document.getElementById("num1").value;
    localStorage.setItem("num1", num1);
}
function guardarnum2(){
    var num2 = document.getElementById("num2").value;
    localStorage.setItem("num2", num2);
}
function calcular(){
    var num1 = localStorage.getItem("num1");
    var num2 = localStorage.getItem("num2");
    var suma = parseInt(num1) + parseInt(num2);
    alert("La suma es: "+suma)
}