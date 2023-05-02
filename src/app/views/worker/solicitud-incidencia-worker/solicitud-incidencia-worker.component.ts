import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import { LoginNa2Service } from 'src/app/services/login/login-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitud-incidencia-worker',
  templateUrl: './solicitud-incidencia-worker.component.html',
  styleUrls: ['./solicitud-incidencia-worker.component.css']
})
export class SolicitudIncidenciaWorkerComponent {
  UsuarioObtenido: any;
  trabajadorObtenido: any;
  fecha = new Date();
  incidencia={
    tipo_incidencia:'',
    nombre_incidencia:'',
    evidencia_incidencia:'',
    fecha_incidencia:Date(),
    observaciones:''
  }

  idTrabajador;

  gerentes: any = [];

  listaIncidencias: any = [];
  constructor(private datepipe: DatePipe, private apiService: ApiNa2Service, private modal: NgbModal, private route: ActivatedRoute, private apiLogin: LoginNa2Service) { }

  ngOnInit(): void {
    this.UsuarioObtenido = this.apiLogin.getUser();
    console.log(this.UsuarioObtenido.idUsuario);
    this.apiService.obtenerTrabajadorByIdUsuario(this.UsuarioObtenido.idUsuario).subscribe(
      (data) => {
        this.trabajadorObtenido = data;
        this.apiService.listarIncidencias(this.trabajadorObtenido.id).subscribe(
          (data) => {
            this.listaIncidencias = data;
            console.log(this.listaIncidencias);
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    )
  }

  abrirModalQueja(crearQueja) {
    this.apiService.listarTrabajadores().subscribe(
      (data: any) => {
        this.gerentes = data.contenido;
        console.log(this.gerentes);
      }
    );
    this.modal.open(crearQueja);
  }

  generarPDF(id_inicidencia: any, idTrabajador: any) {
    console.log(id_inicidencia, idTrabajador);
    Swal.fire({
      icon: 'question',
      title: "Descargar PDF",
      text: "¿Desea descargar el archivo?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Descargar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.apiService.descargarIncidencias(id_inicidencia, idTrabajador).subscribe(
            (data) => {
              let downloadURL = window.URL.createObjectURL(data);
              let link = document.createElement('a')
              link.href = downloadURL;
              link.download = "incidencia.pdf"
              link.click();
            },
            (error) => {
              console.log(error);
              Swal.fire("Erro", "Erro al descargar el archivo", "error");
            }
          );
        }
      });
  }
  
  crearQuejaClick() {
    Swal.fire({
      icon: 'question',
      title: "Crear Queja",
      text: "¿Desea crear una queja?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          let latest_date = this.datepipe.transform(this.incidencia.fecha_incidencia, 'yyyy-MM-dd');
          this.incidencia.fecha_incidencia = latest_date;
          this.apiService.crearIncidencia(this.incidencia, this.idTrabajador).subscribe(
            (data) => {
              this.modal.dismissAll();
              Swal.fire("Exito", "Exito al crear la incidencia", "success");
              console.log(data)
              this.ngOnInit();
            },
            (error) => {
              console.log(error);
            }
          );
        }
      });
  }
}
