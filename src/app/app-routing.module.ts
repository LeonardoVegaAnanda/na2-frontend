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
import { DashboardManagerComponent } from './views/manager/dashboard-manager/dashboard-manager.component';
import { ListarEventosComponent } from './views/manager/listar-eventos/listar-eventos.component';
import { ListarHorasextraManagerComponent } from './views/manager/listar-horasextra-manager/listar-horasextra-manager.component';
import { ListarNominasManagerComponent } from './views/manager/listar-nominas-manager/listar-nominas-manager.component';
import { ListarRetardosManagerComponent } from './views/manager/listar-retardos-manager/listar-retardos-manager.component';
import { ListarTareasManagerComponent } from './views/manager/listar-tareas-manager/listar-tareas-manager.component';
import { ListarTrabajadoresManagerComponent } from './views/manager/listar-trabajadores-manager/listar-trabajadores-manager.component';
import { ListarVacacionesManagerComponent } from './views/manager/listar-vacaciones-manager/listar-vacaciones-manager.component';
import { ListaQuejasManagerComponent } from './views/manager/lista-quejas-manager/lista-quejas-manager.component';
import { DetalleEventoManagerComponent } from './views/manager/detalle-evento-manager/detalle-evento-manager.component';
import { DetalleNominaManagerComponent } from './views/manager/detalle-nomina-manager/detalle-nomina-manager.component';
import { DetallesQuejasManagerComponent } from './views/manager/detalles-quejas-manager/detalles-quejas-manager.component';
import { DetalleRetardoManagerComponent } from './views/manager/detalle-retardo-manager/detalle-retardo-manager.component';
import { DetalleTareaManagerComponent } from './views/manager/detalle-tarea-manager/detalle-tarea-manager.component';
import { DetalleTrabajadorManagerComponent } from './views/manager/detalle-trabajador-manager/detalle-trabajador-manager.component';
import { DetalleVacacionManagerComponent } from './views/manager/detalle-vacacion-manager/detalle-vacacion-manager.component';
import { DashboardWorkerComponent } from './views/worker/dashboard-worker/dashboard-worker.component';
import { ListarEventoWorkerComponent } from './views/worker/listar-evento-worker/listar-evento-worker.component';
import { ListarHoraextraWorkerComponent } from './views/worker/listar-horaextra-worker/listar-horaextra-worker.component';
import { ListarNominasWorkerComponent } from './views/worker/listar-nominas-worker/listar-nominas-worker.component';
import { ListarRetardosWorkerComponent } from './views/worker/listar-retardos-worker/listar-retardos-worker.component';
import { SoliciutdVacacionesWorkerComponent } from './views/worker/soliciutd-vacaciones-worker/soliciutd-vacaciones-worker.component';
import { ListarTareasWorkerComponent } from './views/worker/listar-tareas-worker/listar-tareas-worker.component';
import { SolicitudIncidenciaWorkerComponent } from './views/worker/solicitud-incidencia-worker/solicitud-incidencia-worker.component';
import { ListarQuejasWorkerComponent } from './views/worker/listar-quejas-worker/listar-quejas-worker.component';
import { DetalleEventoWorkerComponent } from './views/worker/detalle-evento-worker/detalle-evento-worker.component';
import { DetalleQuejaWorkerComponent } from './views/worker/detalle-queja-worker/detalle-queja-worker.component';
import { DetalleRetardoWorkerComponent } from './views/worker/detalle-retardo-worker/detalle-retardo-worker.component';
import { DetalleTareaWorkerComponent } from './views/worker/detalle-tarea-worker/detalle-tarea-worker.component';
import { DetalleNominaWorkerComponent } from './views/worker/detalle-nomina-worker/detalle-nomina-worker.component';
import { ManagerGuard } from './services/guards/manager.guard';
import { AdminGuard } from './services/guards/admin/admin.guard';
import { OpcionNuclearComponent } from './views/worker/opcion-nuclear/opcion-nuclear.component';

const routes: Routes = [
  {path:'',component:LoginDashboardComponent},
  {path:'admin',component:DashboardAdminComponent, canActivate:[AdminGuard], children:[
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
  ]},
  {path:'manager',component:DashboardManagerComponent,canActivate:[ManagerGuard], children:[
    {path:'eventos',component:ListarEventosComponent},
    {path:'eventos/:id',component:DetalleEventoManagerComponent},
    {path:'hora-extra',component:ListarHorasextraManagerComponent},
    {path:'nominas',component:ListarNominasManagerComponent},
    {path:'nominas/:id',component:DetalleNominaManagerComponent},
    {path:'quejas',component:ListaQuejasManagerComponent},
    {path:'quejas/:id',component:DetallesQuejasManagerComponent},
    {path:'retardos',component:ListarRetardosManagerComponent},
    {path:'retardos/:id',component:DetalleRetardoManagerComponent},
    {path:'tareas',component:ListarTareasManagerComponent},
    {path:'tareas/:id',component:DetalleTareaManagerComponent},
    {path:'trabajadores',component:ListarTrabajadoresManagerComponent},
    {path:'trabajadores/:id',component:DetalleTrabajadorManagerComponent},
    {path:'vacaciones',component:ListarVacacionesManagerComponent},
    {path:'vacaciones/:id',component:DetalleVacacionManagerComponent}
  ]},
  {path:'worker',component:DashboardWorkerComponent, children:[
    {path:'eventos',component:ListarEventoWorkerComponent},
    {path:'eventos/:id',component:DetalleEventoWorkerComponent},
    {path:'hora-extra',component:ListarHoraextraWorkerComponent},
    {path:'incidencias',component:SolicitudIncidenciaWorkerComponent},
    {path:'nominas',component:ListarNominasWorkerComponent},
    {path:'nominas/:id',component:DetalleNominaWorkerComponent},
    {path:'quejas',component:ListarQuejasWorkerComponent},
    {path:'quejas/:id',component:DetalleQuejaWorkerComponent},
    {path:'retardos',component:ListarRetardosWorkerComponent},
    {path:'retardos/:id',component:DetalleRetardoWorkerComponent},
    {path:'tareas',component:ListarTareasWorkerComponent},
    {path:'tareas/:id',component:DetalleTareaWorkerComponent},
    {path:'vacaciones',component:SoliciutdVacacionesWorkerComponent},
    {path:'renuncia',component:OpcionNuclearComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
