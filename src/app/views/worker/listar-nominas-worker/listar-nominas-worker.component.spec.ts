import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNominasWorkerComponent } from './listar-nominas-worker.component';

describe('ListarNominasWorkerComponent', () => {
  let component: ListarNominasWorkerComponent;
  let fixture: ComponentFixture<ListarNominasWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarNominasWorkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarNominasWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
