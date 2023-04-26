import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleQuejaAdminComponent } from './detalle-queja-admin.component';

describe('DetalleQuejaAdminComponent', () => {
  let component: DetalleQuejaAdminComponent;
  let fixture: ComponentFixture<DetalleQuejaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleQuejaAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleQuejaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
