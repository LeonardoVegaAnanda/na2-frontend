import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';

@Component({
  selector: 'app-detalle-evento-admin',
  templateUrl: './detalle-evento-admin.component.html',
  styleUrls: ['./detalle-evento-admin.component.css']
})
export class DetalleEventoAdminComponent {
  id = 0;
  itemCode: any;
  itemTraido?:any;
  evento:any;

  constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiNa2Service, private modal:NgbModal) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.apiService.obtenerEventoById(this.id).subscribe(
      (data) =>{
        this.evento = data;
      },
      (error)=>{
        console.log(error);
      } 
    );
  }

  editarEventoClick() {

    this.apiService.actualizarEvento(this.evento,this.evento.gerenteModel.id).subscribe(
      (data) => {
        this.modal.dismissAll();
      },
      (error) => {
      }
    );

  }


  openEditarAdministrador(editarAdmin: any) {
    this.modal.open(editarAdmin);
  }
  eliminarEvento(idEvento: any) {
    this.apiService.eliminarEvento(idEvento).subscribe(
      (data) => {

        this.router.navigate(['/admin/eventos']);
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
