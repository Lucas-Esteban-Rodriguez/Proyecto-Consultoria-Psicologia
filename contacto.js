const inputRadio = document.getElementById('inputRadio')
const botonesFormulario = document.getElementById('a')
function preventDefault(e) {
    e.target.preventDefault
}
inputRadio.onchange = () => {
    if (inputRadio.checked) {
        botonesFormulario.innerHTML = '<button type="button" onclick="preventDefault(e)" class="btn btn-success">Siguiente</button> <button type="reset" onclick="preventDefault(e)" class="btn btn-danger">Reiniciar</button>'
    }else {
        botonesFormulario.innerHTML = '<button type="submit" onclick="preventDefault(e)" class="btn btn-primary">Enviar</button><button type="reset" onclick="preventDefault(e)" class="btn btn-danger">Reiniciar</button>'
    }
}