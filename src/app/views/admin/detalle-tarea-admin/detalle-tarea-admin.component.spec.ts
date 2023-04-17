import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTareaAdminComponent } from './detalle-tarea-admin.component';

describe('DetalleTareaAdminComponent', () => {
  let component: DetalleTareaAdminComponent;
  let fixture: ComponentFixture<DetalleTareaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTareaAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleTareaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
