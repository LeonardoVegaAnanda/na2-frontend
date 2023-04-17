import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRenunciasAdminComponent } from './listar-renuncias-admin.component';

describe('ListarRenunciasAdminComponent', () => {
  let component: ListarRenunciasAdminComponent;
  let fixture: ComponentFixture<ListarRenunciasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRenunciasAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarRenunciasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
