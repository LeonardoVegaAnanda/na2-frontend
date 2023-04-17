import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRetardosWorkerComponent } from './listar-retardos-worker.component';

describe('ListarRetardosWorkerComponent', () => {
  let component: ListarRetardosWorkerComponent;
  let fixture: ComponentFixture<ListarRetardosWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRetardosWorkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarRetardosWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
