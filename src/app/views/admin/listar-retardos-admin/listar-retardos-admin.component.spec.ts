import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRetardosAdminComponent } from './listar-retardos-admin.component';

describe('ListarRetardosAdminComponent', () => {
  let component: ListarRetardosAdminComponent;
  let fixture: ComponentFixture<ListarRetardosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRetardosAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarRetardosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
