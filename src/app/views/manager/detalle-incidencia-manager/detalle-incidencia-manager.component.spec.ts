import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleIncidenciaManagerComponent } from './detalle-incidencia-manager.component';

describe('DetalleIncidenciaManagerComponent', () => {
  let component: DetalleIncidenciaManagerComponent;
  let fixture: ComponentFixture<DetalleIncidenciaManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleIncidenciaManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleIncidenciaManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
