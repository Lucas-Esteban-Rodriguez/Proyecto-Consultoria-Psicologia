// Traer datos del localStorage

if (localStorage) {

    switch (localStorage.getItem(1)) {
        case 'Paola':
            
            $('#Hacia').html(
            '<option value="">Seleccionar</option> <option Selected>Paola Sottili</option> <option>Sol Monti</option> <option>Barbara Moreno</option> <option>No sé</option>')
            localStorage.clear()
            break;

        case 'Sol':

            $('#Hacia').html(
                '<option value="">Seleccionar</option> <option>Paola Sottili</option> <option Selected>Sol Monti</option> <option>Barbara Moreno</option> <option>No sé</option>')
                localStorage.clear()
            break;

        case 'Barbara':

            $('#Hacia').html(
                '<option value="">Seleccionar</option> <option>Paola Sottili</option> <option>Sol Monti</option> <option Selected>Barbara Moreno</option> <option>No sé</option>')
                localStorage.clear()
            break;

        default:
            break;
    }
}

// Contacto

const inputRadio = document.getElementById('inputRadio')
const botonesFormulario = document.getElementById('btnsForm')

function pasarATurno() {
    const cardContacto = document.getElementById('cardContacto')
    cardContacto.classList.add('desaparecer')
    const divTurno = document.getElementById('divTurno')
     divTurno.classList.add('aparecer')
}

// Turno

function Rango() {
    const inputRango = document.getElementById('inputRango')
    if (inputRango.checked) {
        const labelDia = document.getElementById('labelDia')
        const labelHora = document.getElementById('labelHora')
    
        labelDia.innerHTML = 'Entre:* <input class="input-turno" type="date">y:* <input class="input-turno" type="date">'
    
        labelHora.innerHTML = 'Entre:* <input class="input-turno" type="time">y:* <input class="input-turno" type="time">'
    } else {
        labelDia.innerHTML = 'Dia:* <input class="input-turno" type="date">'

        labelHora.innerHTML = 'Hora:* <input class="input-turno" type="time">'
    }
}

function volverAContacto() {
    const divTurno = document.getElementById('divTurno')
    divTurno.classList.remove('aparecer')
    const cardContacto = document.getElementById('cardContacto')
    cardContacto.classList.remove('desaparecer')
}

// EMAIL.js

const btnEnviar = document.getElementById('btnEnviar');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btnEnviar.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_xu1vj6i';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btnEnviar.value = 'Enviar';
      if (inputRadio.checked) {
          pasarATurno()
      } else {
          alert('Enviado!');
      }
    }, (err) => {
      btnEnviar.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});