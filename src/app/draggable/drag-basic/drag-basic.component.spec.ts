import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragBasicComponent } from './drag-basic.component';

describe('DragBasicComponent', () => {
  let component: DragBasicComponent;
  let fixture: ComponentFixture<DragBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DragBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
