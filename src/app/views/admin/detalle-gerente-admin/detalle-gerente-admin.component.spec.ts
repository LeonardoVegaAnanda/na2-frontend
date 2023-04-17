import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleGerenteAdminComponent } from './detalle-gerente-admin.component';

describe('DetalleGerenteAdminComponent', () => {
  let component: DetalleGerenteAdminComponent;
  let fixture: ComponentFixture<DetalleGerenteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleGerenteAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleGerenteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
