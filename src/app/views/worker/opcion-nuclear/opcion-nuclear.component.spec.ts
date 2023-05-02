import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionNuclearComponent } from './opcion-nuclear.component';

describe('OpcionNuclearComponent', () => {
  let component: OpcionNuclearComponent;
  let fixture: ComponentFixture<OpcionNuclearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionNuclearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcionNuclearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
