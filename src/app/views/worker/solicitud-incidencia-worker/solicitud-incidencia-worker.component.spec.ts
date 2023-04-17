import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudIncidenciaWorkerComponent } from './solicitud-incidencia-worker.component';

describe('SolicitudIncidenciaWorkerComponent', () => {
  let component: SolicitudIncidenciaWorkerComponent;
  let fixture: ComponentFixture<SolicitudIncidenciaWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudIncidenciaWorkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudIncidenciaWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
