import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoshijoComponent } from './empleadoshijo/empleadoshijo.component';
import { CaracteristicasEmpleadosComponent } from './caracteristicas-empleados/caracteristicas-empleados.component';
import { ServiciosEmpleadosService } from './servicios-empleados.service';
import { empleado } from './empleado.model';
import { empleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';




//Aquí indicamos las rutas

const appeRoutes: Routes=[

  {path:'home', component:HomeComponentComponent},
  {path:'proyectos', component:ProyectosComponentComponent},
  {path: 'quienes', component: QuienesComponentComponent},
  {path:'contacto', component:ContactoComponentComponent},
  {path:'actualiza/:id', component:ActualizaComponentComponent}




];


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoshijoComponent,
    CaracteristicasEmpleadosComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent

  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appeRoutes)
  ],
  providers: [ServiciosEmpleadosService, empleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
