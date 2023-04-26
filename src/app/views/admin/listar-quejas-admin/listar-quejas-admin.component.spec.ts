import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarQuejasAdminComponent } from './listar-quejas-admin.component';

describe('ListarQuejasAdminComponent', () => {
  let component: ListarQuejasAdminComponent;
  let fixture: ComponentFixture<ListarQuejasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarQuejasAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarQuejasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
