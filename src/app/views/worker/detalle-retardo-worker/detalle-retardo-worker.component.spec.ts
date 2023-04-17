import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRetardoWorkerComponent } from './detalle-retardo-worker.component';

describe('DetalleRetardoWorkerComponent', () => {
  let component: DetalleRetardoWorkerComponent;
  let fixture: ComponentFixture<DetalleRetardoWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleRetardoWorkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleRetardoWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
