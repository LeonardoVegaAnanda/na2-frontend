import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleNominaWorkerComponent } from './detalle-nomina-worker.component';

describe('DetalleNominaWorkerComponent', () => {
  let component: DetalleNominaWorkerComponent;
  let fixture: ComponentFixture<DetalleNominaWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleNominaWorkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleNominaWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
