import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTrabajadoresAdminComponent } from './listar-trabajadores-admin.component';

describe('ListarTrabajadoresAdminComponent', () => {
  let component: ListarTrabajadoresAdminComponent;
  let fixture: ComponentFixture<ListarTrabajadoresAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTrabajadoresAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTrabajadoresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
