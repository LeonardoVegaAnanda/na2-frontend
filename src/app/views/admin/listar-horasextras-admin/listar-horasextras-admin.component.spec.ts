import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHorasextrasAdminComponent } from './listar-horasextras-admin.component';

describe('ListarHorasextrasAdminComponent', () => {
  let component: ListarHorasextrasAdminComponent;
  let fixture: ComponentFixture<ListarHorasextrasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarHorasextrasAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarHorasextrasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
