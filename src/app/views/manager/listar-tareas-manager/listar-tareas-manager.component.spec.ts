import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTareasManagerComponent } from './listar-tareas-manager.component';

describe('ListarTareasManagerComponent', () => {
  let component: ListarTareasManagerComponent;
  let fixture: ComponentFixture<ListarTareasManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTareasManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTareasManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
