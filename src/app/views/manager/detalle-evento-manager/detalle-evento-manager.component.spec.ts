import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEventoManagerComponent } from './detalle-evento-manager.component';

describe('DetalleEventoManagerComponent', () => {
  let component: DetalleEventoManagerComponent;
  let fixture: ComponentFixture<DetalleEventoManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleEventoManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleEventoManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
