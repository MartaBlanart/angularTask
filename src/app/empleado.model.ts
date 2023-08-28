 export class empleado{


  //Método constructor (programación orientada a objetos)
  constructor(nombre:string,apellido:string, cargo:string, salario:number) {

   this.nombre=nombre;
   this.apellido=apellido;
   this.cargo=cargo;
   this.salario=salario;

 }

 //Variables del formulario
 titulo = 'Registro empleados:';
 nombre:string="";
 apellido:string="";
 cargo:string="";
 salario:number=0;


}

