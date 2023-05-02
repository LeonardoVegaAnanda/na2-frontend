import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import { LoginNa2Service } from 'src/app/services/login/login-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-nominas-worker',
  templateUrl: './listar-nominas-worker.component.html',
  styleUrls: ['./listar-nominas-worker.component.css']
})
export class ListarNominasWorkerComponent {
  fecha = new Date();
  trabajadores = [];
  listaNominas: any = [];
  idTrabajador: any;
  UsuarioObtenido: any;
  trabajadorObtenido: any;
  validado: boolean = false;

  constructor(private datepipe: DatePipe, private apiService: ApiNa2Service, private modal: NgbModal, private router: Router,private apiLogin:LoginNa2Service) { }
  ngOnInit(): void {
    this.UsuarioObtenido = this.apiLogin.getUser();
    console.log(this.UsuarioObtenido.idUsuario);
    this.apiService.obtenerTrabajadorByIdUsuario(this.UsuarioObtenido.idUsuario).subscribe(
      (data) => {
        this.trabajadorObtenido = data;
        this.apiService.listarNominasTrabajador(this.trabajadorObtenido.id).subscribe(
          (data) => {
            this.listaNominas = data;
            console.log(data);
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  generarPDFDate() {
    Swal.fire({
      icon: 'question',
      title: "Descargar Nomina",
      text: "¿Desea descargar la nomina?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Descargar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          let latest_date = this.datepipe.transform(this.fecha, 'yyyy-MM-dd');
          this.apiService.descargarNominaFechas(latest_date).subscribe(
            (data) => {
              let downloadURL = window.URL.createObjectURL(data);
              let link = document.createElement('a')
              link.href = downloadURL;
              link.download = "nominasTrabajadores.pdf"
              link.click();
            },
            (error) => {
              console.log(error);
              Swal.fire("Error", "Erro al descargar el archivo", "error");
            }
          )
        }
      });

  }
  obtenerNominaDate() {
    let latest_date = this.datepipe.transform(this.fecha, 'yyyy-MM-dd');
    this.apiService.listarNominasDia(latest_date).subscribe(
      (data: any) => {
        this.listaNominas = data;
        this.validado = true;
      },
      (error) => {
        console.log(error)
      }
    );
  }
  abrirModalNomina(crearHora) {
    this.apiService.listarTrabajadores().subscribe(
      (data: any) => {
        this.trabajadores = data.contenido;
        console.log(this.trabajadores);
      }
    );
    this.modal.open(crearHora);
  }
  detalleNomina(idTrabajador, idNomina) {
    this.router.navigate(['/worker/nominas/' + idNomina], {
      queryParams: {
        idNomina: idNomina,
        idTrabajador: idTrabajador
      }
    });
  }
}
