import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleIncidenciaAdminComponent } from './detalle-incidencia-admin.component';

describe('DetalleIncidenciaAdminComponent', () => {
  let component: DetalleIncidenciaAdminComponent;
  let fixture: ComponentFixture<DetalleIncidenciaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleIncidenciaAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleIncidenciaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
