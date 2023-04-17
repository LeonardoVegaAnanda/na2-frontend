import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVacacionesAdminComponent } from './listar-vacaciones-admin.component';

describe('ListarVacacionesAdminComponent', () => {
  let component: ListarVacacionesAdminComponent;
  let fixture: ComponentFixture<ListarVacacionesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVacacionesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarVacacionesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
