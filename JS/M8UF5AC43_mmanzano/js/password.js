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