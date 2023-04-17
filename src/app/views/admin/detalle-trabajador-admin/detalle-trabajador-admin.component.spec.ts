import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTrabajadorAdminComponent } from './detalle-trabajador-admin.component';

describe('DetalleTrabajadorAdminComponent', () => {
  let component: DetalleTrabajadorAdminComponent;
  let fixture: ComponentFixture<DetalleTrabajadorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTrabajadorAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleTrabajadorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
