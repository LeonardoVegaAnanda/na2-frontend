import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVacacionesManagerComponent } from './listar-vacaciones-manager.component';

describe('ListarVacacionesManagerComponent', () => {
  let component: ListarVacacionesManagerComponent;
  let fixture: ComponentFixture<ListarVacacionesManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVacacionesManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarVacacionesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
