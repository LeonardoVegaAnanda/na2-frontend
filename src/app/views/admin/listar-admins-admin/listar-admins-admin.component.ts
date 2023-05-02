import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-admins-admin',
  templateUrl: './listar-admins-admin.component.html',
  styleUrls: ['./listar-admins-admin.component.css']
})
export class ListarAdminsAdminComponent implements OnInit {
  administrador = {
    nombre: '',
    usuario: ''
  }
  administradores: any = [];
  constructor(private apiService: ApiNa2Service, private modal: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.apiService.listarAdmins().subscribe(
      (data: any) => {
        this.administradores = data.contenido;
        console.log(this.administradores);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openCrearAdministrador(crearAdministrador) {
    this.modal.open(crearAdministrador);
  }
  openBuscarSurtidor(buscarSurtidor) {
    this.modal.open(buscarSurtidor);
  }
  crearAdministradorClick() {
    Swal.fire({
      icon: 'question',
      title: "Crear Administrador",
      text: "¿Desea crear al administrador?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
    this.apiService.crearAdministrador(this.administrador).subscribe(
      (data) => {
        Swal.fire('Administrador',"Exito al crear el administrador","success")
        this.modal.dismissAll();
        this.ngOnInit();
      },
      (error) => {
        Swal.fire("Error","Error al crear la hora","error")
      }
    
    );
        }});
  }


}

