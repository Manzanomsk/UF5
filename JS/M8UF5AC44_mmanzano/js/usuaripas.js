function validar() {
    var Usuari = document.form.login.value;
    var a = document.form.a.value;
    var b = document.form.b.value;
    if (document.getElementById("login").value =="ibai" && document.getElementById("a").value=="1234" && document.getElementById("b").value=="1234"){
        alert("L'usuari i password són correctes")
    }   
    else{
        alert("L'usuari i password no son correctes");
    }
}     