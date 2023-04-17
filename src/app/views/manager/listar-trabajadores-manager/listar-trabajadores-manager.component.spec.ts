import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTrabajadoresManagerComponent } from './listar-trabajadores-manager.component';

describe('ListarTrabajadoresManagerComponent', () => {
  let component: ListarTrabajadoresManagerComponent;
  let fixture: ComponentFixture<ListarTrabajadoresManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTrabajadoresManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTrabajadoresManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
