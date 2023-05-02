import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-trabajadores-manager',
  templateUrl: './listar-trabajadores-manager.component.html',
  styleUrls: ['./listar-trabajadores-manager.component.css']
})
export class ListarTrabajadoresManagerComponent {
  users: any = [];
  idUsuario
  trabajador = {
    numero_trabajador: '',
    nombre_trabajador: '',
    apellidoP_trabajador: '',
    rfc: '',
    nss: '',
    curp: '',
    apellidoM_trabajador: '',
    sueldo: '',
    estatus: '',
    fechaIngreso: '',
    celular: '',
    correo_electronico: '',
    puesto: ''
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
    this.apiService.listaUsuarios().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.log(error);
      }
    );
    this.modal.open(crearAdministrador);
  }

  crearTrabajadorClick() {
    Swal.fire({
      icon: 'question',
      title: "Crear Trabajador",
      text: "¿Desea crear al trabajador?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.apiService.crearTrabajador(this.trabajador,this.idUsuario).subscribe(
            (data) => {
              this.modal.dismissAll();
              this.ngOnInit();
              Swal.fire("Exito","Exito al crear el trabajador","success");
            },
            (error) => {
              Swal.fire("Error","Error al crear al trabajador","success");
            }
          );
        }
      });
  }
}
