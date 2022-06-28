let campoTexto = document.getElementById('tarefa')
let button = document.getElementById('button')
let resultado = document.getElementById('res')

button.addEventListener('click', () => {
    resultado.innerHTML += '<p><input type="checkbox">' + campoTexto.value +'</p>'
    campoTexto.value = ''   
})
