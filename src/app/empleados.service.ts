import { Injectable } from "@angular/core";
import { empleado } from "./empleado.model";
import { ServiciosEmpleadosService } from "./servicios-empleados.service";


@Injectable()


export class empleadosService{

  //Un servicio dentro de otro servicio
  constructor(private servicioVentanaEmergente:ServiciosEmpleadosService){

  }


  //En este caso el array es el servicio que se le va a inyectar a todos los componentes que lo soliciten
  empleados:empleado[]=[

    new empleado("Sergio", "Pérez", "Desarrollador .Net", 2500),
    new empleado("Marta", "Blancart", "Desarrollador Angular", 2500),

   ];

   agregarEmpleadoServicio(empleado:empleado){

    this.servicioVentanaEmergente.muestraMensaje("Se procede a agregar al empleado: " + empleado.nombre + "\n" + empleado.apellido);

    this.empleados.push(empleado);
   }

   encontrarEmpleado(indice:number){

    let empleado:empleado=this.empleados[indice];
    return empleado;
   }

   actualizaEmpleados(indice:number, empleado:empleado){

    let empleadoActualizado= this.empleados[indice];

    empleadoActualizado.nombre=empleado.nombre;
    empleadoActualizado.apellido=empleado.apellido;
    empleadoActualizado.cargo=empleado.cargo;
    empleadoActualizado.salario=empleado.salario;

   }

   eliminarEmpleados(indice:number){

    //Funcion javascript (slice) para eliminar elementos de un array
    //(indice,1)-> significa que a partir del indice se elimina un elemento del array
    this.empleados.splice(indice,1);

   }

}
