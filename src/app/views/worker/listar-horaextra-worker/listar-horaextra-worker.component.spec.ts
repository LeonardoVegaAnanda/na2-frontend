import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHoraextraWorkerComponent } from './listar-horaextra-worker.component';

describe('ListarHoraextraWorkerComponent', () => {
  let component: ListarHoraextraWorkerComponent;
  let fixture: ComponentFixture<ListarHoraextraWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarHoraextraWorkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarHoraextraWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
