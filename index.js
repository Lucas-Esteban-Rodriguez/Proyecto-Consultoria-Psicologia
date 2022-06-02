// Rotar carta de PAOLA

$('#btnVermasPaola').click(function () {

    $('#cardInfoPaola').removeClass('opacity-100 pe-all').addClass('opacity-0 pe-none')
    $('#cardPaola').addClass('rotar-carta')
    $('#cardInfoHoverPaola').removeClass('pe-none opacity-0').addClass('opacity-100 pe-all')
    for (let index = 0; index <= 5; index++) {
        
        $('#espPaola'+ index).addClass('esp-'+ index)

    }

})

$('#btnVolverPaola').click(function () {
    
    $('#cardInfoPaola').removeClass('opacity-0 pe-none').addClass('opacity-100 pe-all')
    $('#cardPaola').removeClass('rotar-carta')
    $('#cardInfoHoverPaola').removeClass('pe-all opacity-100').addClass('opacity-0 pe-none')
    for (let index = 0; index <= 5; index++) {
        
        $('#espPaola'+ index).removeClass('esp-'+ index)

    }

})

// Rotar carta de SOL

$('#btnVermasSol').click(function () {

    $('#cardInfoSol').removeClass('opacity-100 pe-all').addClass('opacity-0 pe-none')
    $('#cardSol').addClass('rotar-carta')
    $('#cardInfoHoverSol').removeClass('pe-none opacity-0').addClass('opacity-100 pe-all')
    for (let index = 0; index <= 5; index++) {
        
        $('#espSol'+ index).addClass('esp-'+ index)

    }

})

$('#btnVolverSol').click(function () {
    
    $('#cardInfoSol').removeClass('opacity-0 pe-none').addClass('opacity-100 pe-all')
    $('#cardSol').removeClass('rotar-carta')
    $('#cardInfoHoverSol').removeClass('pe-all opacity-100').addClass('opacity-0 pe-none')
    for (let index = 0; index <= 5; index++) {
        
        $('#espSol'+ index).removeClass('esp-'+ index)

    }

})

// Rotar carta de BARBARA

$('#btnVermasBarbara').click(function () {

    $('#cardInfoBarbara').removeClass('opacity-100 pe-all').addClass('opacity-0 pe-none')
    $('#cardBarbara').addClass('rotar-carta')
    $('#cardInfoHoverBarbara').removeClass('pe-none opacity-0').addClass('opacity-100 pe-all')
    for (let index = 0; index <= 5; index++) {
        
        $('#espBarbara'+ index).addClass('esp-'+ index)

    }

})

$('#btnVolverBarbara').click(function () {
    
    $('#cardInfoBarbara').removeClass('opacity-0 pe-none').addClass('opacity-100 pe-all')
    $('#cardBarbara').removeClass('rotar-carta')
    $('#cardInfoHoverBarbara').removeClass('pe-all opacity-100').addClass('opacity-0 pe-none')
    for (let index = 0; index <= 5; index++) {
        
        $('#espBarbara'+ index).removeClass('esp-'+ index)

    }

})

// Boton contratar y formulario contacto

$('#btnContratarPaola').click(function () {
    
    localStorage.setItem(1,'Paola')
    document.location = 'contacto.html#cardContacto'
})

$('#btnContratarSol').click(function () {
    
    localStorage.setItem(1,'Sol')
    document.location = 'contacto.html#cardContacto'
})

$('#btnContratarBarbara').click(function () {
    
    localStorage.setItem(1,'Barbara')
    document.location = 'contacto.html#cardContacto'
})