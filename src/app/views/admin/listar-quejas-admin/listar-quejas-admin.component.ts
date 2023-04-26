import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';

@Component({
  selector: 'app-listar-quejas-admin',
  templateUrl: './listar-quejas-admin.component.html',
  styleUrls: ['./listar-quejas-admin.component.css']
})
export class ListarQuejasAdminComponent {
  fecha=new Date();
  quejaNueva={
    fechaQueja:Date(),
    tipo_Queja:'',
    cuerpo_queja:'',
    estatus_queja:'Abierta'
  }
  trabajadores=[];
  idTrabajador:any;
  listaQuejas:any=[];
  constructor(private datepipe:DatePipe,private apiService:ApiNa2Service,private modal:NgbModal){}
  ngOnInit(): void {
    this.apiService.listarQuejas().subscribe(
      (data) =>{
        this.listaQuejas = data;
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  obtenerQuejasDate() {
    let latest_date = this.datepipe.transform(this.fecha, 'yyyy-MM-dd');
    this.apiService.listarQuejasFecha(latest_date).subscribe(
      (data: any) => {
        this.listaQuejas = data;
      },
      (error) => {
        console.log(error)
      }
    );
  }
  abrirModalEvento(crearEvento) {
    this.apiService.listarTrabajadores().subscribe(
      (data:any) => {
        this.trabajadores = data.contenido;
        console.log(this.trabajadores);
      }
    );
    this.modal.open(crearEvento);
  }

  crearQuejaClick() {
    let latest_date = this.datepipe.transform(this.quejaNueva.fechaQueja, 'yyyy-MM-dd');
    this.quejaNueva.fechaQueja = latest_date;
    this.apiService.crearQueja(this.quejaNueva, this.idTrabajador).subscribe(
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
}
