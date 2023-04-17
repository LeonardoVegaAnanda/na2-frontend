import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarIncidenciasAdminComponent } from './listar-incidencias-admin.component';

describe('ListarIncidenciasAdminComponent', () => {
  let component: ListarIncidenciasAdminComponent;
  let fixture: ComponentFixture<ListarIncidenciasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarIncidenciasAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarIncidenciasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
