import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarGerentesAdminComponent } from './listar-gerentes-admin.component';

describe('ListarGerentesAdminComponent', () => {
  let component: ListarGerentesAdminComponent;
  let fixture: ComponentFixture<ListarGerentesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarGerentesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarGerentesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
