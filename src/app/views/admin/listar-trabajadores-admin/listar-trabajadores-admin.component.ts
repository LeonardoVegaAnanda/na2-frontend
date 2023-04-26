import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';

@Component({
  selector: 'app-listar-trabajadores-admin',
  templateUrl: './listar-trabajadores-admin.component.html',
  styleUrls: ['./listar-trabajadores-admin.component.css']
})
export class ListarTrabajadoresAdminComponent {
  trabajador = {
    numero_trabajador:'',
    nombre_trabajador: '',
    apellidoP_trabajador:'',
    rfc:'',
    nss:'',
    curp:'',
    apellidoM_trabajador:'',
    sueldo:'',
    estatus:'',
    fechaIngreso:'',
    celular:'',
    correo_electronico:'',
    puesto:''
  }
  trabajadores: any = [];
  constructor(private apiService: ApiNa2Service, private modal: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.apiService.listarTrabajadores().subscribe(
      (data: any) => {
        this.trabajadores = data.contenido;
        console.log(this.trabajadores);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openCrearTrabajador(crearAdministrador) {
    this.modal.open(crearAdministrador);
  }

  crearTrabajadorClick() {
    this.apiService.crearTrabajador(this.trabajador).subscribe(
      (data) => {
        this.modal.dismissAll();
        this.ngOnInit();
      },
      (error) => {

      }
    );
  }
}
