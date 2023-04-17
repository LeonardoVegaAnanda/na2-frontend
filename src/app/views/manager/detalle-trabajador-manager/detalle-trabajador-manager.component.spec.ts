import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTrabajadorManagerComponent } from './detalle-trabajador-manager.component';

describe('DetalleTrabajadorManagerComponent', () => {
  let component: DetalleTrabajadorManagerComponent;
  let fixture: ComponentFixture<DetalleTrabajadorManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTrabajadorManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleTrabajadorManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
