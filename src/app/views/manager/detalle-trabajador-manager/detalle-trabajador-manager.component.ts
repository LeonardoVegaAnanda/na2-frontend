import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-trabajador-manager',
  templateUrl: './detalle-trabajador-manager.component.html',
  styleUrls: ['./detalle-trabajador-manager.component.css']
})
export class DetalleTrabajadorManagerComponent {
  trabajador?: any;
  idTrabajador: any;
  idRenuncia?: any;
  renuncia?: any;
  validacion: boolean = false;

  constructor(private apiService: ApiNa2Service, private route: ActivatedRoute, private modal: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.idTrabajador = this.route.snapshot.params['id'];
    this.apiService.obtenerTrabajadorById(this.idTrabajador).subscribe(
      (data) => {
        this.trabajador = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  editarGerenteClick() {
    Swal.fire({
      icon: 'question',
      title: "Editar Trabajador",
      text: "¿Desea editar al Trabajador?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Editar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.apiService.actualizarTrabajador(this.trabajador).subscribe(
            (data) => {
              Swal.fire("Exito", "Exito al editar", "success");
              console.log(data);
              this.modal.dismissAll();
            },
            (error) => {
              Swal.fire("Error", "Erro al editar", "error");
            }
          );
        }
      });
  }

  validadoPDF() {
    this.apiService.obtenerRenuncia(this.trabajador.id).subscribe(
      (data) => {
        console.log(data);
        this.renuncia = data;
        this.generarPDF(this.renuncia.id_renuncia);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  validado() {
    this.apiService.obtenerRenuncia(this.trabajador.id).subscribe(
      (data) => {
        console.log(data);
        this.renuncia = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  openEditarGerente(editarAdmin: any) {
    this.modal.open(editarAdmin);
  }
  open(actualizarRenuncia: any) {
    this.modal.open(actualizarRenuncia);
    this.validado()
  }

  eliminarGerente(idSurtidor: any) {
    Swal.fire({
      icon: 'question',
      title: "Eliminar Trabajador",
      text: "¿Desea eliminar al trabajador?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.apiService.eliminarTrabajador(idSurtidor).subscribe(
            (data) => {

              this.router.navigate(['/admin/trabajadores']);
            },
            (error) => {
              console.log(error);
            }
          );
        }
      });
  }

  listarinicidencias(id: any) {
    this.router.navigate(['/admin/incidencias/' + id], {
      queryParams: {
        idTrabajador: id
      }
    });
  }
  generarPDF(idRenuncia) {
    Swal.fire({
      icon: 'question',
      title: "Descargar Archivo",
      text: "¿Desea descargar el archivo?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Descargar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          console.log(idRenuncia);
          this.apiService.descargarRenuncia(idRenuncia).subscribe(
            (data) => {
              let downloadURL = window.URL.createObjectURL(data);
              let link = document.createElement('a')
              link.href = downloadURL;
              link.download = "solicitudRenuncia.pdf"
              link.click();
            }, (error) => {
              console.log(error);
              Swal.fire("Error", "Error al descargar", "error");
            }
          );
        }
      });
  }

  aceptar(id: any) {
    console.log(id);
    this.apiService.aceptarRenuncia(id).subscribe(
      (data) => {
        console.log(data);
      }

    );
    this.router.navigate(['/admin/trabajadores']);
    this.modal.dismissAll();

  }
  no_aceptar() {
    this.validacion = true;
  }
  editarRenunciaClick() {
    Swal.fire({
      icon: 'question',
      title: "Editar Renuncia",
      text: "¿Desea editar renuncia",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Editar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.apiService.actualizarRenuncia(this.trabajador.id, this.renuncia).subscribe(
            (data) => {
              console.log(data);
              this.modal.dismissAll();
              Swal.fire("Exito", "Exito al editar", "success");
            },
            (error) => {
              Swal.fire("Error", "Error al editar", "error");
            }
          );
        }
      });
  }
}
