import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';

@Component({
  selector: 'app-detalle-queja-admin',
  templateUrl: './detalle-queja-admin.component.html',
  styleUrls: ['./detalle-queja-admin.component.css']
})
export class DetalleQuejaAdminComponent {
  id = 0;

  
  queja?:any;

  constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiNa2Service,private modal:NgbModal) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.apiService.obtenerQuejaById(this.id).subscribe(
      (data) =>{
        this.queja = data;
      
      },
      (error)=>{
        console.log(error);
      } 
    );
  }
  editarQuejaClick() {

    this.apiService.actualizarQueja(this.queja,this.queja.trabajadorModel.id).subscribe(
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
  eliminarQueja(idEvento: any,idTrabajador) {
    this.apiService.eliminarQueja(idEvento,idTrabajador).subscribe(
      (data) => {

        this.router.navigate(['/admin/quejas']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
