import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';

@Component({
  selector: 'app-detalle-trabajador-admin',
  templateUrl: './detalle-trabajador-admin.component.html',
  styleUrls: ['./detalle-trabajador-admin.component.css']
})
export class DetalleTrabajadorAdminComponent {
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
    this.apiService.actualizarTrabajador(this.trabajador).subscribe(
      (data) => {
        console.log(data);
        this.modal.dismissAll();
      },
      (error) => {
      }
    );
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
    this.apiService.eliminarTrabajador(idSurtidor).subscribe(
      (data) => {

        this.router.navigate(['/admin/trabajadores']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  listarinicidencias(id: any) {
    this.router.navigate(['/admin/incidencias/' + id], {
      queryParams: {
        idTrabajador: id
      }
    });
  }
  generarPDF(idRenuncia) {
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
      }
    );
  }
  aceptar(id:any) {
    console.log(id);
    this.apiService.aceptarRenuncia(id).subscribe(
      (data)=>{
        console.log(data);
      }
      
    );
    this.router.navigate(['/admin/trabajadores']);
    this.modal.dismissAll();

  }
  no_aceptar() {
    this.validacion = true;
  }
  editarRenunciaClick(){
    this.apiService.actualizarRenuncia(this.trabajador.id, this.renuncia).subscribe(
      (data) => {
        console.log(data);
        this.modal.dismissAll();
      },
      (error) => {
      }
    );
  }
  
}
