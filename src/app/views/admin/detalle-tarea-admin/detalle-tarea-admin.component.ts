import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-tarea-admin',
  templateUrl: './detalle-tarea-admin.component.html',
  styleUrls: ['./detalle-tarea-admin.component.css']
})
export class DetalleTareaAdminComponent {
  id = 0;
  tarea?: any;

  constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiNa2Service, private modal: NgbModal) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.apiService.obtenerTareaById(this.id).subscribe(
      (data) => {
        this.tarea = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  editarEventoClick() {
    Swal.fire({
      icon: 'question',
      title: "Editar Tarea",
      text: "¿Desea editar la tarea?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.apiService.actualizarTarea(this.tarea, this.tarea.trabajadorModel.id).subscribe(
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
}
