import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEventosAdminComponent } from './listar-eventos-admin.component';

describe('ListarEventosAdminComponent', () => {
  let component: ListarEventosAdminComponent;
  let fixture: ComponentFixture<ListarEventosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEventosAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarEventosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
