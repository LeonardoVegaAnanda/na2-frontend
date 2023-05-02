import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-admin',
  templateUrl: './detalle-admin.component.html',
  styleUrls: ['./detalle-admin.component.css']
})
export class DetalleAdminComponent {
  administrador?: any;
  idAdministrador: any;

  constructor(private apiService: ApiNa2Service, private route: ActivatedRoute, private modal: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.idAdministrador = this.route.snapshot.params['id'];
    this.apiService.obtenerAdministradorById(this.idAdministrador).subscribe(
      (data) => {
        this.administrador = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  editarAdministradorClick() {
    Swal.fire({
      icon: 'question',
      title: "Editar Administrador",
      text: "¿Desea editar al administrador?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Editar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.apiService.actualizarAdministrador(this.administrador).subscribe(
            (data) => {
              Swal.fire("Exito", "Exito al editar el administrador", "success");
            },
            (error) => {
              Swal.fire("Error", "Error al editar el administrador", "error");
            }
          );
        }
      });

  }


  openEditarAdministrador(editarAdmin: any) {
    this.modal.open(editarAdmin);
  }
  eliminarAdministrador(idSurtidor: any) {
    Swal.fire({
      icon: 'question',
      title: "Eliminar Administrador",
      text: "¿Desea eliminar al administrador?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.apiService.eliminarAdministrador(idSurtidor).subscribe(
            (data) => {
              Swal.fire("Exito","Exito al eliminar al admnistrador","success");
              this.router.navigate(['/admin/admins']);
            },
            (error) => {
              Swal.fire("Error","Error al eliminar al administrador","error");
              console.log(error);
            }
          );
        }
      });
  }
}


