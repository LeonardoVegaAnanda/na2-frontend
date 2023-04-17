import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHorasextraManagerComponent } from './listar-horasextra-manager.component';

describe('ListarHorasextraManagerComponent', () => {
  let component: ListarHorasextraManagerComponent;
  let fixture: ComponentFixture<ListarHorasextraManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarHorasextraManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarHorasextraManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
