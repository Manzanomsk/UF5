function Register() {
    var nom = document.getElementById('nom');
    var cognom = document.getElementById('cognom');
    var edad = document.getElementById('edad').value;
    if(nom.value.length == 0){
        alert('Posa el teu nom');
}
    else if(cognom.value.length == 0){
    alert('Posa el teu cognom');
}
    else if (document.getElementById('edad').value < 18) {
        alert('Tens menys de 18 anys!');
    }
    else {
        localStorage.setItem('nom', nom.value);
        localStorage.setItem('cognom', cognom.value);
        alert('Has creat el teu compte, ya pots fet login!');
    }
}
function Login(){
    var nom = localStorage.getItem('nom');
    var cognom = localStorage.getItem('cognom');

    var usernom = document.getElementById('nom');
    var usercognom = document.getElementById('cognom');

    if(usernom.value == nom && usercognom.value == cognom){
        window.location.replace("web/trivial.htm");
    }
    else{
        alert('El teu nom o cognom es incorrecte');
    }
}

var contingut = document.querySelector('#contingut')
function agafar() {
fetch('https://randomuser.me/api/')
.then(res => res.json())
.then(data => {
console.log(data.results['0'])
contingut.innerHTML = `
<img src="${data.results['0'].picture.large}"
width="100px" class="img-fluid rounded-circle">
<p>Nombre: ${data.results['0'].name.last}</p>
`
})
}
function respuesta(){
    var respuesta1 = "67";
    var respuesta2 = "5000€";
    var respuesta3 = "Adelgaza y debilita los huesos";
    var respuesta4 = "1000€";
    var respuesta5 = "80 años";

    if (document.getElementById('res1').value == respuesta1) {
        document.getElementById('respuesta1').innerHTML = respuesta1
    }
    else {
        document.getElementById('respuesta1').innerHTML = respuesta1
    }


    if (document.getElementById('res2').value == respuesta2) {
        document.getElementById('respuesta2').innerHTML = respuesta2
    }
    else {
        document.getElementById('respuesta2').innerHTML = respuesta2
    }


    if (document.getElementById('res3').value == respuesta3) {
        document.getElementById('respuesta3').innerHTML = respuesta3
    }
    else {
        document.getElementById('respuesta3').innerHTML = respuesta3
    }


    if (document.getElementById('res4').value == respuesta4) {
        document.getElementById('respuesta4').innerHTML = respuesta4
    }
    else {
        document.getElementById('respuesta4').innerHTML = respuesta4
    }


    if (document.getElementById('res5').value == respuesta5) {
        document.getElementById('respuesta5').innerHTML = respuesta5
    }
    else {        
        document.getElementById('respuesta5').innerHTML = respuesta5
    }
}
