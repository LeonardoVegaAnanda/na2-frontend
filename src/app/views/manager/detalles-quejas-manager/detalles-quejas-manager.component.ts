import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-quejas-manager',
  templateUrl: './detalles-quejas-manager.component.html',
  styleUrls: ['./detalles-quejas-manager.component.css']
})
export class DetallesQuejasManagerComponent {
  id = 0;


  queja?: any;

  constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiNa2Service, private modal: NgbModal) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.apiService.obtenerQuejaById(this.id).subscribe(
      (data) => {
        this.queja = data;

      },
      (error) => {
        console.log(error);
      }
    );
  }
  editarQuejaClick() {
    Swal.fire({
      icon: 'question',
      title: "Editar Queja",
      text: "¿Desea editar la queja?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Editar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.apiService.actualizarQueja(this.queja, this.queja.trabajadorModel.id).subscribe(
            (data) => {
              Swal.fire("Exito","Exito al editar","success");
              this.modal.dismissAll();
            },
            (error) => {
              Swal.fire("Error","Error al editar","error");
            }
          );
        }
      });

  }


  openEditarAdministrador(editarAdmin: any) {
    this.modal.open(editarAdmin);
  }
  eliminarQueja(idEvento: any, idTrabajador) {
    Swal.fire({
      icon: 'question',
      title: "Eliminar Queja",
      text: "¿Desea eliminar queja?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.apiService.eliminarQueja(idEvento, idTrabajador).subscribe(
            (data) => {
              Swal.fire("Exito","Exito al eliminar","success");
              this.router.navigate(['/admin/quejas']);
            },
            (error) => {
              Swal.fire("Error","Error al eliminar","error");
              console.log(error);
            }
          );
        }
      });
  }
}
