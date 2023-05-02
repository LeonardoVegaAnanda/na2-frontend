import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-gerentes-admin',
  templateUrl: './listar-gerentes-admin.component.html',
  styleUrls: ['./listar-gerentes-admin.component.css']
})
export class ListarGerentesAdminComponent {

  idUsuario:any;
  users: any = [];

  gerente = {
    numero_gerente: '',
    nombre_gerente: '',
    apellidoP_gerente: '',
    apllidoM_gerente: '',
    sueldo: '',
    estaus: '',
    celular: '',
    correo_electronico: '',
    puesto: ''
  }
  gerentes: any = [];
  constructor(private apiService: ApiNa2Service, private modal: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.apiService.listarGerentes().subscribe(
      (data: any) => {
        this.gerentes = data.contenido;
        console.log(this.gerentes);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openCrearGerente(crearAdministrador) {
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

  crearGerenteClick() {
    
    console.log(this.idUsuario);
    Swal.fire({
      icon: 'question',
      title: "Crear Gerente",
      text: "¿Desea crear al gerente?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.apiService.crearGerente(this.gerente,this.idUsuario).subscribe(
            (data) => {
              Swal.fire("Exito","Exito al crear gerente")
              this.modal.dismissAll();
              this.ngOnInit();
            },
            (error) => {
              Swal.fire("Error","Error al crear la hora","error")
            }
          );
        }
      });
  }
}
