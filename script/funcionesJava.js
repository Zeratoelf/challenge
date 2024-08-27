
// Selección de los elementos HTML
const inputTexto = document.getElementById('text');
const outputTexto = document.querySelector('textarea[name="output"]');
const botonEncriptar = document.querySelector('.buttons-izquierda');
const botonDesencriptar = document.querySelector('.buttons-derecha');

// Función de encriptación
function encriptarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Función de desencriptación
function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Función para validar el texto (solo minúsculas y sin acentos)
function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

// Evento para encriptar
botonEncriptar.addEventListener('click', function() {
    const texto = inputTexto.value;
    if (texto && validarTexto(texto)) {
        const textoEncriptado = encriptarTexto(texto);
        outputTexto.value = textoEncriptado;
    } else {
        outputTexto.value = 'Por favor ingrese un texto válido (solo minúsculas y sin acentos).';
    }
});

// Evento para desencriptar
botonDesencriptar.addEventListener('click', function() {
    const texto = inputTexto.value;
    if (texto && validarTexto(texto)) {
        const textoDesencriptado = desencriptarTexto(texto);
        outputTexto.value = textoDesencriptado;
    } else {
        outputTexto.value = 'Por favor ingrese un texto válido (solo minúsculas y sin acentos).';
    }
});