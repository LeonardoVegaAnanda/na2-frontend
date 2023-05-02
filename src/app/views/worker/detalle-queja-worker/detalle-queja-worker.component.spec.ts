import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleQuejaWorkerComponent } from './detalle-queja-worker.component';

describe('DetalleQuejaWorkerComponent', () => {
  let component: DetalleQuejaWorkerComponent;
  let fixture: ComponentFixture<DetalleQuejaWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleQuejaWorkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleQuejaWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
