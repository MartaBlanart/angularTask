import { Component, Input } from '@angular/core';
import { empleado } from '../empleado.model';

@Component({
  selector: 'app-empleadoshijo',
  templateUrl: './empleadoshijo.component.html',
  styleUrls: ['./empleadoshijo.component.css']
})



export class EmpleadoshijoComponent {

  @Input() empleadoLista:empleado;
  @Input() indice:number;


  arrayCaracteristicas = [''];

  agregarcaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

}
