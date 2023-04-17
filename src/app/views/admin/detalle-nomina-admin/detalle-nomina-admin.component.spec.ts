import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleNominaAdminComponent } from './detalle-nomina-admin.component';

describe('DetalleNominaAdminComponent', () => {
  let component: DetalleNominaAdminComponent;
  let fixture: ComponentFixture<DetalleNominaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleNominaAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleNominaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
