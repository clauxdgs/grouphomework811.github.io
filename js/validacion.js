function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
function changeColor(casilla){
    document.getElementById(casilla).style.borderColor="red";
}

document.addEventListener ("DOMContentLoaded", function(e){
 document.getElementById('formulario').addEventListener('submit',validarForm)
   
});

function validarForm(evento){
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
  if(nombre.length == 0) {
    showAlertError();
    changeColor("nombre");
    return;
  }

  var apellido = document.getElementById('apellido').value;
  if(apellido.length == 0) {
    showAlertError();
    changeColor("apellido");
    return;
  } 
  var email = document.getElementById('email').value;
  if(email.length == 0) {
    showAlertError();
    changeColor("email");
    return;
  }
  var pass1 = document.getElementById('password1').value;
  if (pass1.length < 6) {
    showAlertError();
    changeColor("password1");
    return;
  }

  var pass2 = document.getElementById('password2').value;
  if (pass2 !== pass1) {
    showAlertError();
    changeColor("password1");
    changeColor("password2");
    return;
  }

  var isChecked = document.getElementById('terminos').checked;
  if(!isChecked){
    showAlertError();
    changeColor("terminos");
    return;
  }


  showAlertSuccess();
  this.submit();
}


