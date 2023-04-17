import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTareaWorkerComponent } from './detalle-tarea-worker.component';

describe('DetalleTareaWorkerComponent', () => {
  let component: DetalleTareaWorkerComponent;
  let fixture: ComponentFixture<DetalleTareaWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTareaWorkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleTareaWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
