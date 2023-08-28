import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ServiciosEmpleadosService} from '../servicios-empleados.service';



@Component({
  selector: 'app-caracteristicas-empleados',
  templateUrl: './caracteristicas-empleados.component.html',
  styleUrls: ['./caracteristicas-empleados.component.css']
})
export class CaracteristicasEmpleadosComponent {


  constructor(private miServicio:ServiciosEmpleadosService){}

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  agregaCaracteristicas(value: string) {
   // this.miServicio.muestraMensaje("La caracteristica que se va a añadir es: " + value);
   //this.caracteristicasEmpleados.emit(value);
  }

}
