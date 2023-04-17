import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEventoWorkerComponent } from './detalle-evento-worker.component';

describe('DetalleEventoWorkerComponent', () => {
  let component: DetalleEventoWorkerComponent;
  let fixture: ComponentFixture<DetalleEventoWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleEventoWorkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleEventoWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
