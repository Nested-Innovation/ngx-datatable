import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragGroupingComponent } from './drag-grouping.component';

describe('DragGroupingComponent', () => {
  let component: DragGroupingComponent;
  let fixture: ComponentFixture<DragGroupingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DragGroupingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
