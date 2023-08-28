import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosEmpleadosService {

  constructor() { }

  //Creacción de un servicio que se puede utilizar en varios componentes

  muestraMensaje(mensaje:string){

    alert(mensaje);
  }
}
