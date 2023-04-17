import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTareasWorkerComponent } from './listar-tareas-worker.component';

describe('ListarTareasWorkerComponent', () => {
  let component: ListarTareasWorkerComponent;
  let fixture: ComponentFixture<ListarTareasWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTareasWorkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTareasWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
