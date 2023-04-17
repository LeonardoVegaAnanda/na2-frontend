import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRetardoManagerComponent } from './detalle-retardo-manager.component';

describe('DetalleRetardoManagerComponent', () => {
  let component: DetalleRetardoManagerComponent;
  let fixture: ComponentFixture<DetalleRetardoManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleRetardoManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleRetardoManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
