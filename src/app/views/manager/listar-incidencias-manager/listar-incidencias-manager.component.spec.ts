import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarIncidenciasManagerComponent } from './listar-incidencias-manager.component';

describe('ListarIncidenciasManagerComponent', () => {
  let component: ListarIncidenciasManagerComponent;
  let fixture: ComponentFixture<ListarIncidenciasManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarIncidenciasManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarIncidenciasManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
