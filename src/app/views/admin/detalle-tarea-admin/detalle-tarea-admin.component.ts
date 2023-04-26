import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';

@Component({
  selector: 'app-detalle-tarea-admin',
  templateUrl: './detalle-tarea-admin.component.html',
  styleUrls: ['./detalle-tarea-admin.component.css']
})
export class DetalleTareaAdminComponent {
  id = 0;
  tarea?:any;

  constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiNa2Service,private modal:NgbModal) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.apiService.obtenerTareaById(this.id).subscribe(
      (data) =>{
        this.tarea = data;
      },
      (error)=>{
        console.log(error);
      } 
    );
  }
  editarEventoClick() {

    this.apiService.actualizarTarea(this.tarea,this.tarea.trabajadorModel.id).subscribe(
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
}
