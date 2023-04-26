import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';

@Component({
  selector: 'app-listar-incidencias',
  templateUrl: './listar-incidencias.component.html',
  styleUrls: ['./listar-incidencias.component.css']
})
export class ListarIncidenciasComponent implements OnInit{
  fecha = new Date();

  idTrabajador;

  gerentes: any = [];

  listaIncidencias: any = [];
  constructor(private datepipe: DatePipe, private apiService: ApiNa2Service, private modal: NgbModal,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.idTrabajador = params['idTrabajador']; 
  });
    this.apiService.listarIncidencias(this.idTrabajador).subscribe(
      (data) => {
        this.listaIncidencias = data;
        console.log(this.listaIncidencias);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  generarPDF(id_inicidencia:any,idTrabajador:any){
    console.log(id_inicidencia, idTrabajador);
    this.apiService.descargarIncidencias(id_inicidencia,idTrabajador).subscribe(
      (data)=>{
        let downloadURL = window.URL.createObjectURL(data);
        let link = document.createElement('a')
        link.href= downloadURL;
        link.download = "incidencia.pdf"
        link.click();
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
