import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTareaManagerComponent } from './detalle-tarea-manager.component';

describe('DetalleTareaManagerComponent', () => {
  let component: DetalleTareaManagerComponent;
  let fixture: ComponentFixture<DetalleTareaManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTareaManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleTareaManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
