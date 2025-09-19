import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component {
  texto: string = '';
  lista: string[] = [];

  agregarTexto() {
    if (this.texto.trim() === '') return;
    this.lista.push(this.texto);
    this.texto = '';
  }

  eliminarTexto() {
    this.lista.pop();
  }
}

