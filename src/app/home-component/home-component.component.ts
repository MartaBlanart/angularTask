import { Component } from '@angular/core';
import { empleado } from '../empleado.model';
import { ServiciosEmpleadosService } from '../servicios-empleados.service';
import { empleadosService } from '../empleados.service';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {

  titulo="Formulario registro:"
  titulo2= "Empleado registrados:"

 //Inyección de un servicio
  constructor(private miServicio:ServiciosEmpleadosService, private dataService:empleadosService){

   this.empleados=this.dataService.empleados;
  }


  empleados:empleado[]=[];

  agregarEmpleado(){

   let miEmpleado= new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
   //Se utiliza el servicio
   //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre  +  miEmpleado.apellido);
   this.dataService.agregarEmpleadoServicio(miEmpleado);

  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

}
