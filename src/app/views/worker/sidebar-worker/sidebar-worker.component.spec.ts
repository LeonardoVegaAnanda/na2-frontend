import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarWorkerComponent } from './sidebar-worker.component';

describe('SidebarWorkerComponent', () => {
  let component: SidebarWorkerComponent;
  let fixture: ComponentFixture<SidebarWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarWorkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
