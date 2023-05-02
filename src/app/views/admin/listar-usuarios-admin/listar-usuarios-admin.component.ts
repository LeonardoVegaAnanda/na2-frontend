import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-usuarios-admin',
  templateUrl: './listar-usuarios-admin.component.html',
  styleUrls: ['./listar-usuarios-admin.component.css']
})
export class ListarUsuariosAdminComponent {
  //Atributos
  users: any = [];
  usuarioData = {
    username: '',
    password: '',
    nombre: '',
    area: '',
  }

  //Constructor
  constructor(private andService: ApiNa2Service, private modal: NgbModal) { }

  //Inicio del Proyecto
  ngOnInit(): void {
    //Listar Usuarios
    this.andService.listaUsuarios().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //Abrir ventana modal para crear un usuario nuevo
  open(crearUsuarioModal) {
    this.modal.open(crearUsuarioModal, { size: 'lg' });
  }

  //Metodo para crear un usuario
  crearUsuario() {
    if (this.usuarioData.nombre == null || this.usuarioData.username == null || this.usuarioData.area == null || this.usuarioData.password == null || this.usuarioData.nombre == "" || this.usuarioData.area == "" || this.usuarioData.password == "" || this.usuarioData.username == "") {
    }
    else {
      Swal.fire({
        icon: 'question',
        title: "Crear Usuario",
        text: "¿Desea crear al usuario?",
        showCancelButton: true,
        confirmButtonColor: '#3CC3C8',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Crear',
        cancelButtonText: 'Cancelar'
      }).then(
        (e) => {
          if (e.isConfirmed) {
            this.andService.crearUsuario(this.usuarioData).subscribe(
              (data) => {
                this.ngOnInit();
                this.modal.dismissAll();
                this.limpiarDatos();
                Swal.fire("Exito","Exito al crear al usuario","success");
              },
              (error) => {
                Swal.fire("Error","Error al crear al usuario","error");
                console.log(error);
              }
            );
          }
        });
    }
  }



  limpiarDatos() {
    this.usuarioData.nombre = "";
    this.usuarioData.area = "";
    this.usuarioData.password = "";
    this.usuarioData.username = "";
  }
}
