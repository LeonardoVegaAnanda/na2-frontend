import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRetardosManagerComponent } from './listar-retardos-manager.component';

describe('ListarRetardosManagerComponent', () => {
  let component: ListarRetardosManagerComponent;
  let fixture: ComponentFixture<ListarRetardosManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRetardosManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarRetardosManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
