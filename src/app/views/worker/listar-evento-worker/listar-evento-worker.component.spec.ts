import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEventoWorkerComponent } from './listar-evento-worker.component';

describe('ListarEventoWorkerComponent', () => {
  let component: ListarEventoWorkerComponent;
  let fixture: ComponentFixture<ListarEventoWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEventoWorkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarEventoWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
