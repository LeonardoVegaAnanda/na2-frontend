import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNominasAdminComponent } from './listar-nominas-admin.component';

describe('ListarNominasAdminComponent', () => {
  let component: ListarNominasAdminComponent;
  let fixture: ComponentFixture<ListarNominasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarNominasAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarNominasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
