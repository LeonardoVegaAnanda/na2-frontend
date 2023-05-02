import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-gerente-admin',
  templateUrl: './detalle-gerente-admin.component.html',
  styleUrls: ['./detalle-gerente-admin.component.css']
})
export class DetalleGerenteAdminComponent {
  gerente?: any;
  idGerente: any;

  constructor(private apiService: ApiNa2Service, private route: ActivatedRoute, private modal: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.idGerente = this.route.snapshot.params['id'];
    this.apiService.obtenerGerenteById(this.idGerente).subscribe(
      (data) => {
        this.gerente = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  editarGerenteClick() {
    Swal.fire({
      icon: 'question',
      title: "Editar Gerente",
      text: "¿Desea editar al gerente?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Editar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.apiService.actualizarGerente(this.gerente).subscribe(
            (data) => {
              Swal.fire("Exito", "Exito al editar el gerente", "success");
              console.log(data);
              this.modal.dismissAll();
            },
            (error) => {
              Swal.fire("Error", "Error al editar el gerente", "error");
            }
          );
        }
      });
  }

  openEditarGerente(editarAdmin: any) {
    this.modal.open(editarAdmin);
  }

  eliminarGerente(idSurtidor: any) {
    Swal.fire({
      icon: 'question',
      title: "Eliminar Gerente",
      text: "¿Desea eliminar al gerente?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.apiService.eliminarGerente(idSurtidor).subscribe(
            (data) => {
              Swal.fire("Exito","Exito al eliminar el gerente","success");
              this.router.navigate(['/admin/gerente']);
            },
            (error) => {
              Swal.fire("Error", "Error al eliminar el gerente","error");
              console.log(error);
            }
          );
        }
      });
  }
}
