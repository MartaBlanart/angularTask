import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empleado } from '../empleado.model';
import { ServiciosEmpleadosService } from '../servicios-empleados.service';
import { empleadosService } from '../empleados.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})






//Para que el metodo ngOnit funcione tenemos que a la clase implementarle el OnInit
export class ActualizaComponentComponent implements OnInit{
  constructor(private router: Router, private miServicio:ServiciosEmpleadosService, private route: ActivatedRoute,  private dataService:empleadosService) {

    this.empleados=this.dataService.empleados;
  }


  ngOnInit(): void {
    this.accion=parseInt(this.route.snapshot.queryParams['accion']);

    this.indice=this.route.snapshot.params['id'];

    let empleado:empleado=this.dataService.encontrarEmpleado(this.indice);
    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;
  }
       //Estamos pasando el indice a traves de la ruta para poder recuperar la información de los empleados




  paginaInicio(){

    this.router.navigate(['/home']);

  }

  titulo="Formulario registro:"
  titulo2= "Empleados registrados:"


  empleados:empleado[]=[];

  accion:number;

 /* actualizaEmpleados(){

    let miEmpleado= new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //Se utiliza el servicio
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre  +  miEmpleado.apellido);
    this.dataService.actualizaEmpleados(this.indice,miEmpleado);

    //Redirección automática al home
    this.router.navigate(['/home']);

   }

  eliminaEmpleado(){

    this.dataService.eliminarEmpleados(this.indice);

    //Redirección automática al home
    this.router.navigate(['/home']);

  }*/

  actualizaEmpleados(){

    if(this.accion==1){

      let miEmpleado= new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      //Se utiliza el servicio
      //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre  +  miEmpleado.apellido);
      this.dataService.actualizaEmpleados(this.indice,miEmpleado);

      //Redirección automática al home
      this.router.navigate(['/home']);
    }

   else{
    this.dataService.eliminarEmpleados(this.indice);

    //Redirección automática al home
    this.router.navigate(['/home']);
   }



   }

   cuadroNombre:string="";
   cuadroApellido:string="";
   cuadroCargo:string="";
   cuadroSalario:number=0;

  indice:number;
}
