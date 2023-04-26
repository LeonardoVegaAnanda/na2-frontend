import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAdminsAdminComponent } from './listar-admins-admin.component';

describe('ListarAdminsAdminComponent', () => {
  let component: ListarAdminsAdminComponent;
  let fixture: ComponentFixture<ListarAdminsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAdminsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarAdminsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
