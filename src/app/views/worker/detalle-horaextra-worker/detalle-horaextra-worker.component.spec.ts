import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleHoraextraWorkerComponent } from './detalle-horaextra-worker.component';

describe('DetalleHoraextraWorkerComponent', () => {
  let component: DetalleHoraextraWorkerComponent;
  let fixture: ComponentFixture<DetalleHoraextraWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleHoraextraWorkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleHoraextraWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
