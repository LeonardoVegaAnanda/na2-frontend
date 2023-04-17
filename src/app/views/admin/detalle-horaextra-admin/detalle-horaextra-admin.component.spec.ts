import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleHoraextraAdminComponent } from './detalle-horaextra-admin.component';

describe('DetalleHoraextraAdminComponent', () => {
  let component: DetalleHoraextraAdminComponent;
  let fixture: ComponentFixture<DetalleHoraextraAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleHoraextraAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleHoraextraAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
