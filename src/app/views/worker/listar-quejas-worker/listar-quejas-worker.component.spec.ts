import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarQuejasWorkerComponent } from './listar-quejas-worker.component';

describe('ListarQuejasWorkerComponent', () => {
  let component: ListarQuejasWorkerComponent;
  let fixture: ComponentFixture<ListarQuejasWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarQuejasWorkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarQuejasWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
