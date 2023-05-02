import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-nomina-admin',
  templateUrl: './detalle-nomina-admin.component.html',
  styleUrls: ['./detalle-nomina-admin.component.css']
})
export class DetalleNominaAdminComponent {
  id = 0;
  idTrabajador =0;
  itemCode: any;

  itemTraido?:any;
  nomina:any;

  constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiNa2Service,private modal:NgbModal) { }

  ngOnInit(): void {
     this.route.queryParams.subscribe(params=>{
        this.id = params['idNomina'];
        this.idTrabajador = params['idTrabajador']; 
    })
    this.apiService.obtenerNominaById(this.id,this.idTrabajador).subscribe(
      (data) =>{
        this.nomina = data;
      },
      (error)=>{
        console.log(error);
      } 
    );
  }
  editarEventoClick() {
    Swal.fire({
      icon: 'question',
      title: "Editar Nomina",
      text: "¿Desea editar la nomina?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Editar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
    this.apiService.actualizarEvento(this.nomina,this.nomina.gerenteModel.id).subscribe(
      (data) => {
        this.modal.dismissAll();
      },
      (error) => {
      }
    );}});
  }


  openEditarAdministrador(editarAdmin: any) {
    this.modal.open(editarAdmin);
  }

  pdfNomina(id:any,idTrabajador:any){
    Swal.fire({
      icon: 'question',
      title: "Descargar Archivo",
      text: "¿Desea crear al administrador?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'descargar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
    this.apiService.descargarNominaById(id,idTrabajador).subscribe(
      (data:any)=>{
        let downloadURL = window.URL.createObjectURL(data);
        let link = document.createElement('a')
        link.href= downloadURL;
        link.download = "nominaTrabajadorDetalle.pdf"
        link.click();
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error","Error al descargar","error");
      }
    );}});
  }
}
