import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';

@Component({
  selector: 'app-listar-nominas-admin',
  templateUrl: './listar-nominas-admin.component.html',
  styleUrls: ['./listar-nominas-admin.component.css']
})
export class ListarNominasAdminComponent {
  fecha=new Date();
  trabajadores=[];
  listaNominas:any=[];
  idTrabajador:any;

  validado:boolean=false;

  constructor(private datepipe:DatePipe,private apiService:ApiNa2Service,private modal:NgbModal,private router:Router){}
  ngOnInit(): void {
    this.apiService.listarNominas().subscribe(
      (data) =>{
        this.listaNominas = data;
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  generarPDFDate(){
    let latest_date = this.datepipe.transform(this.fecha, 'yyyy-MM-dd');
    this.apiService.descargarNominaFechas(latest_date).subscribe(
      (data)=>{
        let downloadURL = window.URL.createObjectURL(data);
        let link = document.createElement('a')
        link.href= downloadURL;
        link.download = "nominasTrabajadores.pdf"
        link.click();
      },
      (error)=>{
        console.log(error);
      }
      )
    
  }
  obtenerNominaDate() {
    let latest_date = this.datepipe.transform(this.fecha, 'yyyy-MM-dd');
    this.apiService.listarNominasDia(latest_date).subscribe(
      (data: any) => {
        this.listaNominas = data;
        this.validado=true;
      },
      (error) => {
        console.log(error)
      }
    );
  }
  abrirModalEvento(crearHora) {
    this.apiService.listarTrabajadores().subscribe(
      (data:any) => {
        this.trabajadores = data.contenido;
        console.log(this.trabajadores);
      }
    );
    this.modal.open(crearHora);
  }

  crearEventoClick() {

    this.apiService.crearNomina(this.idTrabajador).subscribe(
      (data) => {
        this.modal.dismissAll();
        console.log(data)
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  detalleNomina(idTrabajador,idNomina){
    this.router.navigate(['/admin/nominas/'+idNomina],{
      queryParams:{
        idNomina:idNomina,
        idTrabajador:idTrabajador
      }
    });
  }
}
