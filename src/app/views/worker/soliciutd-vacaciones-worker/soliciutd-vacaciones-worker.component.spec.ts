import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoliciutdVacacionesWorkerComponent } from './soliciutd-vacaciones-worker.component';

describe('SoliciutdVacacionesWorkerComponent', () => {
  let component: SoliciutdVacacionesWorkerComponent;
  let fixture: ComponentFixture<SoliciutdVacacionesWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoliciutdVacacionesWorkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoliciutdVacacionesWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
