import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDashboardComponent } from './views/login/login-dashboard/login-dashboard.component';
import { DashboardAdminComponent } from './views/admin/dashboard-admin/dashboard-admin.component';
import { ListarAdminsAdminComponent } from './views/admin/listar-admins-admin/listar-admins-admin.component';
import { DetalleAdminComponent } from './views/admin/detalle-admin/detalle-admin.component';
import { ListarEventosAdminComponent } from './views/admin/listar-eventos-admin/listar-eventos-admin.component';
import { DetalleEventoAdminComponent } from './views/admin/detalle-evento-admin/detalle-evento-admin.component';
import { ListarGerentesAdminComponent } from './views/admin/listar-gerentes-admin/listar-gerentes-admin.component';
import { DetalleGerenteAdminComponent } from './views/admin/detalle-gerente-admin/detalle-gerente-admin.component';
import { ListarHorasextrasAdminComponent } from './views/admin/listar-horasextras-admin/listar-horasextras-admin.component';
import { ListarNominasAdminComponent } from './views/admin/listar-nominas-admin/listar-nominas-admin.component';
import { DetalleNominaAdminComponent } from './views/admin/detalle-nomina-admin/detalle-nomina-admin.component';
import { ListarQuejasAdminComponent } from './views/admin/listar-quejas-admin/listar-quejas-admin.component';
import { DetalleQuejaAdminComponent } from './views/admin/detalle-queja-admin/detalle-queja-admin.component';
import { ListarRetardosAdminComponent } from './views/admin/listar-retardos-admin/listar-retardos-admin.component';
import { DetalleRetardoAdminComponent } from './views/admin/detalle-retardo-admin/detalle-retardo-admin.component';
import { ListarTareasAdminComponent } from './views/admin/listar-tareas-admin/listar-tareas-admin.component';
import { DetalleTareaAdminComponent } from './views/admin/detalle-tarea-admin/detalle-tarea-admin.component';
import { ListarTrabajadoresAdminComponent } from './views/admin/listar-trabajadores-admin/listar-trabajadores-admin.component';
import { DetalleTrabajadorAdminComponent } from './views/admin/detalle-trabajador-admin/detalle-trabajador-admin.component';
import { ListarVacacionesAdminComponent } from './views/admin/listar-vacaciones-admin/listar-vacaciones-admin.component';
import { DetalleVacacionAdminComponent } from './views/admin/detalle-vacacion-admin/detalle-vacacion-admin.component';
import { ListarUsuariosAdminComponent } from './views/admin/listar-usuarios-admin/listar-usuarios-admin.component';
import { ListarIncidenciasComponent } from './views/admin/listar-incidencias/listar-incidencias.component';

const routes: Routes = [
  {path:'',component:LoginDashboardComponent,pathMatch:'full'},
  {path:'admin',component:DashboardAdminComponent, children:[
    {path:'admins',component:ListarAdminsAdminComponent},
    {path:'admins/:id',component:DetalleAdminComponent},
    {path:'eventos',component:ListarEventosAdminComponent},
    {path:'eventos/:id',component:DetalleEventoAdminComponent},
    {path:'gerentes',component:ListarGerentesAdminComponent},
    {path:'gerentes/:id',component:DetalleGerenteAdminComponent},
    {path:'hora-extra',component:ListarHorasextrasAdminComponent},
    {path:'nominas',component:ListarNominasAdminComponent},
    {path:'nominas/:id',component:DetalleNominaAdminComponent},
    {path:'quejas',component:ListarQuejasAdminComponent},
    {path:'quejas/:id',component:DetalleQuejaAdminComponent},
    {path:'retardos',component:ListarRetardosAdminComponent},
    {path:'retardos/:id',component:DetalleRetardoAdminComponent},
    {path:'tareas',component:ListarTareasAdminComponent},
    {path:'tareas/:id',component:DetalleTareaAdminComponent},
    {path:'trabajadores',component:ListarTrabajadoresAdminComponent},
    {path:'trabajadores/:id',component:DetalleTrabajadorAdminComponent},
    {path:'vacaciones',component:ListarVacacionesAdminComponent},
    {path:'vacaciones/:id',component:DetalleVacacionAdminComponent},
    {path:'usuarios',component:ListarUsuariosAdminComponent},
    {path:'incidencias/:id',component:ListarIncidenciasComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
