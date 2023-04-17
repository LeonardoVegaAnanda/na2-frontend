import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRenunciaManagerComponent } from './detalle-renuncia-manager.component';

describe('DetalleRenunciaManagerComponent', () => {
  let component: DetalleRenunciaManagerComponent;
  let fixture: ComponentFixture<DetalleRenunciaManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleRenunciaManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleRenunciaManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
