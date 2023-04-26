import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';

@Component({
  selector: 'app-listar-gerentes-admin',
  templateUrl: './listar-gerentes-admin.component.html',
  styleUrls: ['./listar-gerentes-admin.component.css']
})
export class ListarGerentesAdminComponent {
  gerente = {
    numero_gerente:'',
    nombre_gerente: '',
    apellidoP_gerente:'',
    apelliodM_gerente:'',
    sueldo:'',
    estatus:'',
    celular:'',
    correo_electronico:'',
    puesto:''
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
    this.modal.open(crearAdministrador);
  }

  crearGerenteClick() {
    this.apiService.crearGerente(this.gerente).subscribe(
      (data) => {
        this.modal.dismissAll();
        this.ngOnInit();
      },
      (error) => {

      }
    );
  }
}
