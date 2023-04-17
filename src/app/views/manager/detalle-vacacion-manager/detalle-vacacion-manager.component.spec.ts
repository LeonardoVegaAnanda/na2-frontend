import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVacacionManagerComponent } from './detalle-vacacion-manager.component';

describe('DetalleVacacionManagerComponent', () => {
  let component: DetalleVacacionManagerComponent;
  let fixture: ComponentFixture<DetalleVacacionManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleVacacionManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleVacacionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
