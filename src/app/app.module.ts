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
import { ListarRetardosAdminComponent } from './views/admin/listar-retardos-admin/listar-retardos-admin.component';
import { ListarTareasAdminComponent } from './views/admin/listar-tareas-admin/listar-tareas-admin.component';
import { ListarUsuariosAdminComponent } from './views/admin/listar-usuarios-admin/listar-usuarios-admin.component';
import { ListarEventosAdminComponent } from './views/admin/listar-eventos-admin/listar-eventos-admin.component';
import { ListarHorasextrasAdminComponent } from './views/admin/listar-horasextras-admin/listar-horasextras-admin.component';
import { DetalleEventoAdminComponent } from './views/admin/detalle-evento-admin/detalle-evento-admin.component';
import { DetalleGerenteAdminComponent } from './views/admin/detalle-gerente-admin/detalle-gerente-admin.component';
import { DetalleNominaAdminComponent } from './views/admin/detalle-nomina-admin/detalle-nomina-admin.component';
import { DetalleRetardoAdminComponent } from './views/admin/detalle-retardo-admin/detalle-retardo-admin.component';
import { DetalleTareaAdminComponent } from './views/admin/detalle-tarea-admin/detalle-tarea-admin.component';
import { DetalleTrabajadorAdminComponent } from './views/admin/detalle-trabajador-admin/detalle-trabajador-admin.component';
import { DetalleVacacionAdminComponent } from './views/admin/detalle-vacacion-admin/detalle-vacacion-admin.component';
import { DashboardManagerComponent } from './views/manager/dashboard-manager/dashboard-manager.component';
import { SidebarManagerComponent } from './views/manager/sidebar-manager/sidebar-manager.component';
import { ListarEventosComponent } from './views/manager/listar-eventos/listar-eventos.component';
import { ListarHorasextraManagerComponent } from './views/manager/listar-horasextra-manager/listar-horasextra-manager.component';
import { ListarIncidenciasManagerComponent } from './views/manager/listar-incidencias-manager/listar-incidencias-manager.component';
import { ListarNominasManagerComponent } from './views/manager/listar-nominas-manager/listar-nominas-manager.component';
import { ListarRetardosManagerComponent } from './views/manager/listar-retardos-manager/listar-retardos-manager.component';
import { ListarTareasManagerComponent } from './views/manager/listar-tareas-manager/listar-tareas-manager.component';
import { ListarVacacionesManagerComponent } from './views/manager/listar-vacaciones-manager/listar-vacaciones-manager.component';
import { ListarTrabajadoresManagerComponent } from './views/manager/listar-trabajadores-manager/listar-trabajadores-manager.component';
import { DetalleEventoManagerComponent } from './views/manager/detalle-evento-manager/detalle-evento-manager.component';
import { DetalleNominaManagerComponent } from './views/manager/detalle-nomina-manager/detalle-nomina-manager.component';
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
import { DetalleNominaWorkerComponent } from './views/worker/detalle-nomina-worker/detalle-nomina-worker.component';
import { DetalleRetardoWorkerComponent } from './views/worker/detalle-retardo-worker/detalle-retardo-worker.component';
import { DetalleTareaWorkerComponent } from './views/worker/detalle-tarea-worker/detalle-tarea-worker.component';
import { SoliciutdVacacionesWorkerComponent } from './views/worker/soliciutd-vacaciones-worker/soliciutd-vacaciones-worker.component';
import { SolicitudIncidenciaWorkerComponent } from './views/worker/solicitud-incidencia-worker/solicitud-incidencia-worker.component';
import { ForbiddenComponent } from './views/forbidden/forbidden.component';
import { NotFountComponent } from './views/not-fount/not-fount.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { authInterceptorProviders } from './services/util/auth.interceptor';
import { ListarAdminsAdminComponent } from './views/admin/listar-admins-admin/listar-admins-admin.component';
import { ListarQuejasAdminComponent } from './views/admin/listar-quejas-admin/listar-quejas-admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetalleAdminComponent } from './views/admin/detalle-admin/detalle-admin.component';
import { DatePipe } from '@angular/common';
import { DetalleQuejaAdminComponent } from './views/admin/detalle-queja-admin/detalle-queja-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ListarIncidenciasComponent } from './views/admin/listar-incidencias/listar-incidencias.component';
import { ListaQuejasManagerComponent } from './views/manager/lista-quejas-manager/lista-quejas-manager.component';
import { DetallesQuejasManagerComponent } from './views/manager/detalles-quejas-manager/detalles-quejas-manager.component';
import { ListarQuejasWorkerComponent } from './views/worker/listar-quejas-worker/listar-quejas-worker.component';
import { DetalleQuejaWorkerComponent } from './views/worker/detalle-queja-worker/detalle-queja-worker.component';
import { AdminGuard } from './services/guards/admin/admin.guard';
import { OpcionNuclearComponent } from './views/worker/opcion-nuclear/opcion-nuclear.component';



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
    ListarRetardosAdminComponent,
    ListarTareasAdminComponent,
    ListarUsuariosAdminComponent,
    ListarEventosAdminComponent,
    ListarHorasextrasAdminComponent,
    DetalleEventoAdminComponent,
    DetalleGerenteAdminComponent,
    DetalleNominaAdminComponent,
    DetalleRetardoAdminComponent,
    DetalleTareaAdminComponent,
    DetalleTrabajadorAdminComponent,
    DetalleVacacionAdminComponent,
    DashboardManagerComponent,
    SidebarManagerComponent,
    ListarEventosComponent,
    ListarHorasextraManagerComponent,
    ListarIncidenciasManagerComponent,
    ListarNominasManagerComponent,
    ListarRetardosManagerComponent,
    ListarTareasManagerComponent,
    ListarVacacionesManagerComponent,
    ListarTrabajadoresManagerComponent,
    DetalleEventoManagerComponent,
    DetalleNominaManagerComponent,
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
    DetalleNominaWorkerComponent,
    DetalleRetardoWorkerComponent,
    DetalleTareaWorkerComponent,
    SoliciutdVacacionesWorkerComponent,
    SolicitudIncidenciaWorkerComponent,
    ForbiddenComponent,
    NotFountComponent,
    ListarAdminsAdminComponent,
    ListarQuejasAdminComponent,
    DetalleAdminComponent,
    DetalleQuejaAdminComponent,
    ListarIncidenciasComponent,
    ListaQuejasManagerComponent,
    DetallesQuejasManagerComponent,
    ListarQuejasWorkerComponent,
    DetalleQuejaWorkerComponent,
    OpcionNuclearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [authInterceptorProviders,
  DatePipe],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
