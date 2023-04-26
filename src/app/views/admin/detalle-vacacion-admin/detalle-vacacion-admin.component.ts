import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';

@Component({
  selector: 'app-detalle-vacacion-admin',
  templateUrl: './detalle-vacacion-admin.component.html',
  styleUrls: ['./detalle-vacacion-admin.component.css']
})
export class DetalleVacacionAdminComponent {
  id = 0;
  idTrabajador =0;
  vacaciones:any;

  constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiNa2Service,private modal:NgbModal) { }

  ngOnInit(): void {
     this.route.queryParams.subscribe(params=>{
        this.id = params['id_Vacacion'];
        this.idTrabajador = params['idTrabajador']; 
    })
    this.apiService.obtenerVacacionById(this.id,this.idTrabajador).subscribe(
      (data) =>{
        this.vacaciones = data;
        console.log(this.vacaciones);      },
      (error)=>{
        console.log(error);
      } 
    );
  }
  editarEventoClick() {

    this.apiService.actualizarEvento(this.vacaciones,this.vacaciones.trabajadorModel.id).subscribe(
      (data) => {
        this.modal.dismissAll();
      },
      (error) => {
      }
    );

  }

  generarSolicitudPDF(id){
    this.apiService.descargarSolicitudVacaciones(id).subscribe(
      (data)=>{
        let downloadURL = window.URL.createObjectURL(data);
        let link = document.createElement('a')
        link.href= downloadURL;
        link.download = "solicitudVacaciones.pdf";
        link.click();
      }
    );
  }


  openEditarAdministrador(editarAdmin: any) {
    this.modal.open(editarAdmin);
  }

}
