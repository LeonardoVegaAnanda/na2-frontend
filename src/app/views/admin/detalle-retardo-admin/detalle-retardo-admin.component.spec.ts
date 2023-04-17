import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRetardoAdminComponent } from './detalle-retardo-admin.component';

describe('DetalleRetardoAdminComponent', () => {
  let component: DetalleRetardoAdminComponent;
  let fixture: ComponentFixture<DetalleRetardoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleRetardoAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleRetardoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
