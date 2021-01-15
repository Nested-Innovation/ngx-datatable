import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllenGroupingComponent } from './allen-grouping.component';

describe('AllenGroupingComponent', () => {
  let component: AllenGroupingComponent;
  let fixture: ComponentFixture<AllenGroupingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllenGroupingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllenGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
