const inputRadio = document.getElementById('inputRadio')
const botonesFormulario = document.getElementById('a')
inputRadio.onchange = () => {
    if (inputRadio.checked) {
        botonesFormulario.innerHTML = '<button class="btn btn-success">Siguiente</button> <button class="btn btn-danger">Reiniciar</button>'
    }else {
        botonesFormulario.innerHTML = '<button class="btn btn-primary">Enviar</button><button class="btn btn-danger">Reiniciar</button>'
    }
}