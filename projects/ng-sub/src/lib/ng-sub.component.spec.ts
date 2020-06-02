import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSubComponent } from './ng-sub.component';

describe('NgSubComponent', () => {
  let component: NgSubComponent;
  let fixture: ComponentFixture<NgSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
