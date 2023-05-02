import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesQuejasManagerComponent } from './detalles-quejas-manager.component';

describe('DetallesQuejasManagerComponent', () => {
  let component: DetallesQuejasManagerComponent;
  let fixture: ComponentFixture<DetallesQuejasManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesQuejasManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesQuejasManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
