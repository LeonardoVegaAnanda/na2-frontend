import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';

@Component({
  selector: 'app-detalle-retardo-manager',
  templateUrl: './detalle-retardo-manager.component.html',
  styleUrls: ['./detalle-retardo-manager.component.css']
})
export class DetalleRetardoManagerComponent {
  id = 0;
  itemCode: any;

  itemTraido?:any;
  retardo?:any;

  constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiNa2Service) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.apiService.obtenerRetardoById(this.id).subscribe(
      (data) =>{
        this.retardo = data;
      },
      (error)=>{
        console.log(error);
      } 
    );
  }
}
