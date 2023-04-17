import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRenunciaAdminComponent } from './detalle-renuncia-admin.component';

describe('DetalleRenunciaAdminComponent', () => {
  let component: DetalleRenunciaAdminComponent;
  let fixture: ComponentFixture<DetalleRenunciaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleRenunciaAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleRenunciaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
