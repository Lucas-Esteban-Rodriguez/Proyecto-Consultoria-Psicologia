// Contacto

function preventDefault(e) {
    e.target.preventDefault
}

const inputRadio = document.getElementById('inputRadio')
const botonesFormulario = document.getElementById('btnsForm')

inputRadio.onchange = () => {
    if (inputRadio.checked) {
        botonesFormulario.innerHTML = '<button type="button" onclick="pasarATurno()" class="btn btn-success" id="btnSiguiente">Siguiente</button> <button type="reset" onclick="preventDefault(e)" class="btn btn-danger">Reiniciar</button>'
    }else {
        botonesFormulario.innerHTML = '<button type="submit" onclick="preventDefault(e)" class="btn btn-primary">Enviar</button><button type="reset" onclick="preventDefault(e)" class="btn btn-danger">Reiniciar</button>'
    }
}

function pasarATurno() {
    const divTurno = document.getElementById('divTurno')
    divTurno.classList.add('aparecer')
    const cardContacto = document.getElementById('cardContacto')
    cardContacto.classList.add('desaparecer')
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