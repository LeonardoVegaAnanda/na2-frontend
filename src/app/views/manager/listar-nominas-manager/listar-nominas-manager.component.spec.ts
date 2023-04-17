import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNominasManagerComponent } from './listar-nominas-manager.component';

describe('ListarNominasManagerComponent', () => {
  let component: ListarNominasManagerComponent;
  let fixture: ComponentFixture<ListarNominasManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarNominasManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarNominasManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
