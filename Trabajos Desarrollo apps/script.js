const texto = document.getElementById('texto');
const Cambiar = document.getElementById('Cambiar');
const lista = document.getElementById('lista');
                        

     Cambiar.addEventListener('click', function() {
    const nuevaTareaTexto = texto.value;
    if (nuevaTareaTexto === '') return;
                        

    const nuevaTareaLi = document.createElement('li');
    nuevaTareaLi.textContent = nuevaTareaTexto;
    lista.appendChild(nuevaTareaLi);
                        

    texto.value = '';
    });
