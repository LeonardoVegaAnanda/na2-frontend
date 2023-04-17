import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVacacionAdminComponent } from './detalle-vacacion-admin.component';

describe('DetalleVacacionAdminComponent', () => {
  let component: DetalleVacacionAdminComponent;
  let fixture: ComponentFixture<DetalleVacacionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleVacacionAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleVacacionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
