import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTareasAdminComponent } from './listar-tareas-admin.component';

describe('ListarTareasAdminComponent', () => {
  let component: ListarTareasAdminComponent;
  let fixture: ComponentFixture<ListarTareasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTareasAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTareasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
