import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';

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

    this.apiService.actualizarAdministrador(this.administrador).subscribe(
      (data) => {

      },
      (error) => {
      }
    );

  }


  openEditarAdministrador(editarAdmin: any) {
    this.modal.open(editarAdmin);
  }
  eliminarAdministrador(idSurtidor: any) {
    this.apiService.eliminarAdministrador(idSurtidor).subscribe(
      (data) => {

        this.router.navigate(['/admin/admins']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}


