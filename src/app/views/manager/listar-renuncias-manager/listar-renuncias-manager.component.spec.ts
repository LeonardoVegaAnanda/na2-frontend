import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRenunciasManagerComponent } from './listar-renuncias-manager.component';

describe('ListarRenunciasManagerComponent', () => {
  let component: ListarRenunciasManagerComponent;
  let fixture: ComponentFixture<ListarRenunciasManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRenunciasManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarRenunciasManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
