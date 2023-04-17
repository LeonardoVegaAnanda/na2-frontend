import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginDashboardComponent } from './views/login/login-dashboard/login-dashboard.component';
import { DashboardAdminComponent } from './views/admin/dashboard-admin/dashboard-admin.component';
import { SidebarAdminComponent } from './views/admin/sidebar-admin/sidebar-admin.component';
import { ListarGerentesAdminComponent } from './views/admin/listar-gerentes-admin/listar-gerentes-admin.component';
import { ListarTrabajadoresAdminComponent } from './views/admin/listar-trabajadores-admin/listar-trabajadores-admin.component';
import { ListarNominasAdminComponent } from './views/admin/listar-nominas-admin/listar-nominas-admin.component';
import { ListarVacacionesAdminComponent } from './views/admin/listar-vacaciones-admin/listar-vacaciones-admin.component';
import { ListarRenunciasAdminComponent } from './views/admin/listar-renuncias-admin/listar-renuncias-admin.component';
import { ListarIncidenciasAdminComponent } from './views/admin/listar-incidencias-admin/listar-incidencias-admin.component';
import { ListarRetardosAdminComponent } from './views/admin/listar-retardos-admin/listar-retardos-admin.component';
import { ListarTareasAdminComponent } from './views/admin/listar-tareas-admin/listar-tareas-admin.component';
import { ListarUsuariosAdminComponent } from './views/admin/listar-usuarios-admin/listar-usuarios-admin.component';
import { ListarEventosAdminComponent } from './views/admin/listar-eventos-admin/listar-eventos-admin.component';
import { ListarHorasextrasAdminComponent } from './views/admin/listar-horasextras-admin/listar-horasextras-admin.component';
import { DetalleEventoAdminComponent } from './views/admin/detalle-evento-admin/detalle-evento-admin.component';
import { DetalleGerenteAdminComponent } from './views/admin/detalle-gerente-admin/detalle-gerente-admin.component';
import { DetalleHoraextraAdminComponent } from './views/admin/detalle-horaextra-admin/detalle-horaextra-admin.component';
import { DetalleIncidenciaAdminComponent } from './views/admin/detalle-incidencia-admin/detalle-incidencia-admin.component';
import { DetalleNominaAdminComponent } from './views/admin/detalle-nomina-admin/detalle-nomina-admin.component';
import { DetalleRenunciaAdminComponent } from './views/admin/detalle-renuncia-admin/detalle-renuncia-admin.component';
import { DetalleRetardoAdminComponent } from './views/admin/detalle-retardo-admin/detalle-retardo-admin.component';
import { DetalleTareaAdminComponent } from './views/admin/detalle-tarea-admin/detalle-tarea-admin.component';
import { DetalleTrabajadorAdminComponent } from './views/admin/detalle-trabajador-admin/detalle-trabajador-admin.component';
import { DetalleUsuarioAdminComponent } from './views/admin/detalle-usuario-admin/detalle-usuario-admin.component';
import { DetalleVacacionAdminComponent } from './views/admin/detalle-vacacion-admin/detalle-vacacion-admin.component';
import { DashboardManagerComponent } from './views/manager/dashboard-manager/dashboard-manager.component';
import { SidebarManagerComponent } from './views/manager/sidebar-manager/sidebar-manager.component';
import { ListarEventosComponent } from './views/manager/listar-eventos/listar-eventos.component';
import { ListarHorasextraManagerComponent } from './views/manager/listar-horasextra-manager/listar-horasextra-manager.component';
import { ListarIncidenciasManagerComponent } from './views/manager/listar-incidencias-manager/listar-incidencias-manager.component';
import { ListarNominasManagerComponent } from './views/manager/listar-nominas-manager/listar-nominas-manager.component';
import { ListarRenunciasManagerComponent } from './views/manager/listar-renuncias-manager/listar-renuncias-manager.component';
import { ListarRetardosManagerComponent } from './views/manager/listar-retardos-manager/listar-retardos-manager.component';
import { ListarTareasManagerComponent } from './views/manager/listar-tareas-manager/listar-tareas-manager.component';
import { ListarVacacionesManagerComponent } from './views/manager/listar-vacaciones-manager/listar-vacaciones-manager.component';
import { ListarTrabajadoresManagerComponent } from './views/manager/listar-trabajadores-manager/listar-trabajadores-manager.component';
import { DetalleEventoManagerComponent } from './views/manager/detalle-evento-manager/detalle-evento-manager.component';
import { DetalleHoraextraManagerComponent } from './views/manager/detalle-horaextra-manager/detalle-horaextra-manager.component';
import { DetalleIncidenciaManagerComponent } from './views/manager/detalle-incidencia-manager/detalle-incidencia-manager.component';
import { DetalleNominaManagerComponent } from './views/manager/detalle-nomina-manager/detalle-nomina-manager.component';
import { DetalleRenunciaManagerComponent } from './views/manager/detalle-renuncia-manager/detalle-renuncia-manager.component';
import { DetalleRetardoManagerComponent } from './views/manager/detalle-retardo-manager/detalle-retardo-manager.component';
import { DetalleTareaManagerComponent } from './views/manager/detalle-tarea-manager/detalle-tarea-manager.component';
import { DetalleTrabajadorManagerComponent } from './views/manager/detalle-trabajador-manager/detalle-trabajador-manager.component';
import { DetalleVacacionManagerComponent } from './views/manager/detalle-vacacion-manager/detalle-vacacion-manager.component';
import { DashboardWorkerComponent } from './views/worker/dashboard-worker/dashboard-worker.component';
import { SidebarWorkerComponent } from './views/worker/sidebar-worker/sidebar-worker.component';
import { ListarEventoWorkerComponent } from './views/worker/listar-evento-worker/listar-evento-worker.component';
import { ListarHoraextraWorkerComponent } from './views/worker/listar-horaextra-worker/listar-horaextra-worker.component';
import { ListarNominasWorkerComponent } from './views/worker/listar-nominas-worker/listar-nominas-worker.component';
import { ListarRetardosWorkerComponent } from './views/worker/listar-retardos-worker/listar-retardos-worker.component';
import { ListarTareasWorkerComponent } from './views/worker/listar-tareas-worker/listar-tareas-worker.component';
import { DetalleEventoWorkerComponent } from './views/worker/detalle-evento-worker/detalle-evento-worker.component';
import { DetalleHoraextraWorkerComponent } from './views/worker/detalle-horaextra-worker/detalle-horaextra-worker.component';
import { DetalleNominaWorkerComponent } from './views/worker/detalle-nomina-worker/detalle-nomina-worker.component';
import { DetalleRetardoWorkerComponent } from './views/worker/detalle-retardo-worker/detalle-retardo-worker.component';
import { DetalleTareaWorkerComponent } from './views/worker/detalle-tarea-worker/detalle-tarea-worker.component';
import { SoliciutdVacacionesWorkerComponent } from './views/worker/soliciutd-vacaciones-worker/soliciutd-vacaciones-worker.component';
import { SolicitudIncidenciaWorkerComponent } from './views/worker/solicitud-incidencia-worker/solicitud-incidencia-worker.component';
import { ForbiddenComponent } from './views/forbidden/forbidden.component';
import { NotFountComponent } from './views/not-fount/not-fount.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginDashboardComponent,
    DashboardAdminComponent,
    SidebarAdminComponent,
    ListarGerentesAdminComponent,
    ListarTrabajadoresAdminComponent,
    ListarNominasAdminComponent,
    ListarVacacionesAdminComponent,
    ListarRenunciasAdminComponent,
    ListarIncidenciasAdminComponent,
    ListarRetardosAdminComponent,
    ListarTareasAdminComponent,
    ListarUsuariosAdminComponent,
    ListarEventosAdminComponent,
    ListarHorasextrasAdminComponent,
    DetalleEventoAdminComponent,
    DetalleGerenteAdminComponent,
    DetalleHoraextraAdminComponent,
    DetalleIncidenciaAdminComponent,
    DetalleNominaAdminComponent,
    DetalleRenunciaAdminComponent,
    DetalleRetardoAdminComponent,
    DetalleTareaAdminComponent,
    DetalleTrabajadorAdminComponent,
    DetalleUsuarioAdminComponent,
    DetalleVacacionAdminComponent,
    DashboardManagerComponent,
    SidebarManagerComponent,
    ListarEventosComponent,
    ListarHorasextraManagerComponent,
    ListarIncidenciasManagerComponent,
    ListarNominasManagerComponent,
    ListarRenunciasManagerComponent,
    ListarRetardosManagerComponent,
    ListarTareasManagerComponent,
    ListarVacacionesManagerComponent,
    ListarTrabajadoresManagerComponent,
    DetalleEventoManagerComponent,
    DetalleHoraextraManagerComponent,
    DetalleIncidenciaManagerComponent,
    DetalleNominaManagerComponent,
    DetalleRenunciaManagerComponent,
    DetalleRetardoManagerComponent,
    DetalleTareaManagerComponent,
    DetalleTrabajadorManagerComponent,
    DetalleVacacionManagerComponent,
    DashboardWorkerComponent,
    SidebarWorkerComponent,
    ListarEventoWorkerComponent,
    ListarHoraextraWorkerComponent,
    ListarNominasWorkerComponent,
    ListarRetardosWorkerComponent,
    ListarTareasWorkerComponent,
    DetalleEventoWorkerComponent,
    DetalleHoraextraWorkerComponent,
    DetalleNominaWorkerComponent,
    DetalleRetardoWorkerComponent,
    DetalleTareaWorkerComponent,
    SoliciutdVacacionesWorkerComponent,
    SolicitudIncidenciaWorkerComponent,
    ForbiddenComponent,
    NotFountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
