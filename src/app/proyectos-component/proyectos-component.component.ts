import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { empleado } from '../empleado.model';
import { ServiciosEmpleadosService } from '../servicios-empleados.service';
import { empleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent {



  constructor(private router: Router, private miServicio:ServiciosEmpleadosService, private dataService:empleadosService) {

    this.empleados=this.dataService.empleados;

   }

  paginaInicio(){

    this.router.navigate(['/home']);

  }

  titulo="Formulario registro:"
  titulo2= "Empleados registrados:"



  empleados:empleado[]=[];

  agregarEmpleado() {

      let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

      // Se utiliza el servicio para mostrar un mensaje y agregar el empleado
      this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre + " " + miEmpleado.apellido);
      this.dataService.agregarEmpleadoServicio(miEmpleado);

      // Redirección automática al home
      this.router.navigate(['/home']);

  }


   cuadroNombre:string="";
   cuadroApellido:string="";
   cuadroCargo:string="";
   cuadroSalario:number=0;

  }

