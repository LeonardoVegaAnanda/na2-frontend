import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaQuejasManagerComponent } from './lista-quejas-manager.component';

describe('ListaQuejasManagerComponent', () => {
  let component: ListaQuejasManagerComponent;
  let fixture: ComponentFixture<ListaQuejasManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaQuejasManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaQuejasManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
