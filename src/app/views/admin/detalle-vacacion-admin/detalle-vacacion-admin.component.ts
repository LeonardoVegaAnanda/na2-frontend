import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-vacacion-admin',
  templateUrl: './detalle-vacacion-admin.component.html',
  styleUrls: ['./detalle-vacacion-admin.component.css']
})
export class DetalleVacacionAdminComponent {
  id = 0;
  idTrabajador = 0;
  vacaciones: any;

  constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiNa2Service, private modal: NgbModal) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id_Vacacion'];
      this.idTrabajador = params['idTrabajador'];
    })
    this.apiService.obtenerVacacionById(this.id, this.idTrabajador).subscribe(
      (data) => {
        this.vacaciones = data;
        console.log(this.vacaciones);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  editarEventoClick() {
    Swal.fire({
      icon: 'question',
      title: "Editar Vacaciones",
      text: "¿Desea editar las vacaciones?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Editar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.apiService.actualizarEvento(this.vacaciones, this.vacaciones.trabajadorModel.id).subscribe(
            (data) => {
              this.modal.dismissAll();
            },
            (error) => {
            }
          );
        }
      });

  }

  generarSolicitudPDF(id) {
    Swal.fire({
      icon: 'question',
      title: "Descargar Archivo",
      text: "¿Desea descargar archivo?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Descargar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.apiService.descargarSolicitudVacaciones(id).subscribe(
            (data) => {
              let downloadURL = window.URL.createObjectURL(data);
              let link = document.createElement('a')
              link.href = downloadURL;
              link.download = "solicitudVacaciones.pdf";
              link.click();
            }
          );
        }
      });
  }


  openEditarAdministrador(editarAdmin: any) {
    this.modal.open(editarAdmin);
  }

}
