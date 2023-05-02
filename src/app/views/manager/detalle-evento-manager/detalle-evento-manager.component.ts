import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-evento-manager',
  templateUrl: './detalle-evento-manager.component.html',
  styleUrls: ['./detalle-evento-manager.component.css']
})
export class DetalleEventoManagerComponent {
  id = 0;
  itemCode: any;
  itemTraido?: any;
  evento: any;

  constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiNa2Service, private modal: NgbModal) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.apiService.obtenerEventoById(this.id).subscribe(
      (data) => {
        this.evento = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editarEventoClick() {
    Swal.fire({
      icon: 'question',
      title: "Editar Eventos",
      text: "¿Desea editar el evento?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Editar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.apiService.actualizarEvento(this.evento, this.evento.gerenteModel.id).subscribe(
            (data) => {
              Swal.fire("Exito", "Exito al editar el evento", "success");
              this.modal.dismissAll();
            },
            (error) => {
              Swal.fire("Error", "Error al editar el evento", "error");
            }
          );
        }
      });

  }


  openEditarAdministrador(editarAdmin: any) {
    this.modal.open(editarAdmin);
  }
  eliminarEvento(idEvento: any) {
    Swal.fire({
      icon: 'question',
      title: "Eliminar Evento",
      text: "¿Desea eliminar el evento?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.apiService.eliminarEvento(idEvento).subscribe(
            (data) => {
              Swal.fire("Exito","Exito al eliminar el evento","success");
              this.router.navigate(['/manager/eventos']);
            },
            (error) => {
              Swal.fire("Error","Error al eliminar el evento","error");
              console.log(error);
            }
          );
        }
      });
  }
}
