import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleHoraextraManagerComponent } from './detalle-horaextra-manager.component';

describe('DetalleHoraextraManagerComponent', () => {
  let component: DetalleHoraextraManagerComponent;
  let fixture: ComponentFixture<DetalleHoraextraManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleHoraextraManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleHoraextraManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
