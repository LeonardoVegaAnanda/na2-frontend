import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../util/helper';

@Injectable({
  providedIn: 'root'
})
export class ApiNa2Service {
  baseAnd: string = `${baseUrl}`

  constructor(private http: HttpClient) { }

  public aceptarRenuncia(id:any){
    return this.http.put(this.baseAnd+"/renuncia/aceptar/"+id,id);
  }
  public actualizarAdministrador(admin: any) {
    return this.http.put(this.baseAnd + "/admin/", admin);
  }
  public actualizarEvento(evento:any,id:any){
    return this.http.put(this.baseAnd+"/gerentes/"+id+"/eventos/",evento);
  }
  public actualizarGerente(gerente:any){
    return this.http.put(this.baseAnd+"/gerentes",gerente);
  }
  public actualizarQueja(queja:any,idTrabajador){
    return this.http.put(this.baseAnd+"/trabajadores/"+idTrabajador+"/quejas",queja);
  }
  public actualizarTrabajador(trabajador:any){
    return this.http.put(this.baseAnd+"/trabajadores",trabajador);
  }
  public actualizarTarea(tarea:any, idTrabajador){
    return this.http.put(this.baseAnd+"/trabajadores/"+idTrabajador+"/tareas",tarea);
  }
  public actualizarRenuncia(idTrabajador,renuncia){
    return this.http.put(this.baseAnd+"/renuncia/"+idTrabajador,renuncia);
  }
  public crearAdministrador(admin: any) {
    return this.http.post(this.baseAnd + "/admin/", admin);
  }
  public crearGerente(gerente:any,id:any){
    return this.http.post(this.baseAnd+"/gerentes?idUsuario="+id,gerente);
  }
  public crearHoraExtra(hora:any, idTrabajador:any){
   return this.http.post(this.baseAnd+"/trabajadores/"+idTrabajador+"/horaExtra/",hora);
  }
  public crearIncidencia(incidencia:any, id:any){
    return this.http.post(this.baseAnd+"/"+id,incidencia);
  }
  public crearQueja(queja:any,idTrabajador:any){
    return this.http.post(this.baseAnd+"/trabajadores/"+idTrabajador+"/quejas/",queja);
  }
  public crearTrabajador(trabajador:any,id:any){
    return this.http.post(this.baseAnd+"/trabajadores?idUsuario="+id,trabajador);
  }
  public crearEvento(evento:any, id:any){
    return this.http.post(this.baseAnd+"/gerentes/"+id+"/eventos/",evento);
  }
  public crearNomina(idTrabajador:any){
    return this.http.post(this.baseAnd+"/trabajadores/"+idTrabajador+"/nominas/",idTrabajador);
  }
  public crearRetardo(idTrabajador,retardo:any){
    return this.http.post(this.baseAnd+"/trabajadores/"+idTrabajador+"/retardos/",retardo);
  }
  public crearTarea(tarea:any, idTrabajador:any){
    return this.http.post(this.baseAnd+"/trabajadores/"+idTrabajador+"/tareas/",tarea);
  }
  public crearUsuario(usuario:any){
    return this.http.post(this.baseAnd+"/auth/usuario?rol=" + usuario.area, usuario);
  }
  public crearVacacion(vacacion:any,id:any){
    return this.http.post(this.baseAnd+"/trabajadores/"+id+"/vacaciones/",vacacion);
  }
  public descargarIncidencias(id:any,idTrabajador:any){
    return this.http.get(this.baseAnd+"/na2/trabajador/"+idTrabajador+"/incidencia/pdf/"+id,{responseType:'blob'})
  }
  public descargarNominaById(id:any,idTrabajador){
    return this.http.get(this.baseAnd+"/nomina/pdf/"+idTrabajador+"/idNomina/"+id, {responseType:'blob'});
  }
  public descargarNominaFechas(fecha:any){
    return this.http.get(this.baseAnd+"/nomina/pdf/?fecha="+fecha, {responseType:'blob'});
  }
  public descargarRenuncia(idRenuncia){
    return this.http.get(this.baseAnd+"/renuncia/na2/renuncia/pdf/"+idRenuncia,{responseType:'blob'})
  }
  public descargarSolicitudVacaciones(idVacaciones:any){
    return this.http.get(this.baseAnd+"/vacacion/pdf/"+idVacaciones,{responseType:'blob'});
  }
  public eliminarAdministrador(id: any) {
    return this.http.delete(this.baseAnd + "/admin/" + id);
  }
  public eliminarEvento(id:any){
    return this.http.delete(this.baseAnd+"/eventos/"+id);
  }
  public eliminarGerente(id:any){
    return this.http.delete(this.baseAnd+"/gerentes/"+id);
  }
  public eliminarQueja(id:any,idTrabajador){
    return this.http.delete(this.baseAnd+"/trabajadores/"+idTrabajador+"/quejas/"+id);
  }
  public eliminarTrabajador(id:any){
    return this.http.delete(this.baseAnd+"/trabajadores/"+id);
  }
  public listarAdmins() {
    return this.http.get(this.baseAnd + "/admin/");
  }
  public listarEventos(){
    return this.http.get(this.baseAnd+"/eventos");
  }
  public listarEventosGerente(id:any){
    return this.http.get(this.baseAnd+"/gerentes/"+id+"/eventos/");
  }
  public listarEventosDia(fecha:any){
    return this.http.get(this.baseAnd+"/eventos/fecha?fecha="+fecha);
  }
  public listarGerentes(){
    return this.http.get(this.baseAnd+"/gerentes")
  }
  public listarHoras(){
    return this.http.get(this.baseAnd+"/horaExtra/");
  }
  public listarHorasExtraTrabajador(id:any){
    return this.http.get(this.baseAnd+"/trabajadores/"+id+"/horaExtra/");
  }
  public listarHorasExtrasDia(fecha:any){
    return this.http.get(this.baseAnd+"/horaExtra/fecha?fecha="+fecha);
  }
  public listarIncidencias(id:any){
    return this.http.get(this.baseAnd+"/trabajadores/"+id+"/incidencias");
  }
  public listarNominas(){
    return this.http.get(this.baseAnd+"/nominas/");
  }
  public listarNominasTrabajador(id:any){
    return this.http.get(this.baseAnd+"/nominas/trabajadores/"+id);
  }
  public listarNominasDia(fecha:any){
    return this.http.get(this.baseAnd+"/nomina/fecha?fecha="+fecha);
  }
  public listarQuejas(){
    return this.http.get(this.baseAnd+"/quejas/");
  }
  public listarQuejasTrabajadores(id:any){
    return this.http.get(this.baseAnd+"/trabajadores/"+id+"/quejas/");
  }
  public listarQuejasFecha(fecha:any){
    return this.http.get(this.baseAnd+"/quejas/fecha?fecha="+fecha);
  }
  public listarRetardos(){
    return this.http.get(this.baseAnd+"/retardos/");
  }
  public listarRetardosDia(fecha:any){
    return this.http.get(this.baseAnd+"/retardos/fecha?fecha="+fecha);
  }
  public listarRetardosTrabajador(id:any){
    return this.http.get(this.baseAnd+"/trabajadores/"+id+"/retardos/");
  }
  public listarTareas(){
    return this.http.get(this.baseAnd+"/tareas/")
  }
  public listarTareasDia(fecha:any){
    return this.http.get(this.baseAnd+"/tareas/fecha?fecha="+fecha);
  }
  public listarTareasTrabajadores(id:any){
    return this.http.get(this.baseAnd+"/trabajadores/"+id+"/tareas/");
  }
  public listarTrabajadores(){
    return this.http.get(this.baseAnd+"/trabajadores")
  }
  public listarVacaciones(){
    return this.http.get(this.baseAnd+"/vacaciones/")
  }
  public listarVacacionesFecha(fecha:any){
    return this.http.get(this.baseAnd+"/vacacion/fecha?fecha="+fecha);
  }
  public listarVacacionesTrabajadores(id:any){
    return this.http.get(this.baseAnd+"/trabajadores/"+id+"/vacaciones/")
  }
  public listaUsuarios(){
    return this.http.get(this.baseAnd+"/auth/usuarios");
  }
  public obtenerAdministradorById(id: any) {
    return this.http.get(this.baseAnd + "/admin/" + id);
  }
  public obtenerEventoById(id:any){
    return this.http.get(this.baseAnd+"/eventos/"+id);
  }
  public obtenerGerenteById(id:any){
    return this.http.get(this.baseAnd+"/gerentes/"+id);
  }
  public obtenerGerenteByIdUsuario(id:any){
    return this.http.get(this.baseAnd+"/gerentes/idUsuario/"+id);
  }
  public obtenerNominaById(id:any,idTrabajador:any){
    return this.http.get(this.baseAnd+"/trabajadores/"+idTrabajador+"/nominas/"+id)
  }
  public obtenerQuejaById(id:any){
    return this.http.get(this.baseAnd+"/quejas/"+id);
  }
  public obtenerRetardoById(id:any){
    return this.http.get(this.baseAnd+"/retardos/"+id);
  }
  public obtenerRenuncia(idTrabajador){
    return this.http.get(this.baseAnd+"/renuncia/"+idTrabajador);
  }
  public obtenerTareaById(id:any){
    return this.http.get(this.baseAnd+"/tareas/"+id);
  }
  public obtenerTrabajadorById(id:any){
    return this.http.get(this.baseAnd+"/trabajadores/"+id);
  }
  public obtenerTrabajadorByIdUsuario(id:any){
    return this.http.get(this.baseAnd+"/trabajadores/idUsuario/"+id);
  }
  public obtenerVacacionById(id:any,id_trabajador:any){
    return this.http.get(this.baseAnd+"/trabajadores/"+id_trabajador+"/vacaciones/"+id);
  }

}
