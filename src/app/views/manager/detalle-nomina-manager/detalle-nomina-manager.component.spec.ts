import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleNominaManagerComponent } from './detalle-nomina-manager.component';

describe('DetalleNominaManagerComponent', () => {
  let component: DetalleNominaManagerComponent;
  let fixture: ComponentFixture<DetalleNominaManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleNominaManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleNominaManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
