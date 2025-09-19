import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements AfterViewInit {
  ngAfterViewInit() {
    const texto = document.getElementById('texto') as HTMLInputElement;
    const cambiar = document.getElementById('Cambiar') as HTMLButtonElement;
    const lista = document.getElementById('lista') as HTMLElement;

    cambiar.addEventListener('click', function () {
      const nuevaTareaTexto = texto.value;
      if (nuevaTareaTexto === '') return;

      const nuevaTareaLi = document.createElement('li');
      nuevaTareaLi.textContent = nuevaTareaTexto;
      lista.appendChild(nuevaTareaLi);

      texto.value = '';
    });
  }
}

