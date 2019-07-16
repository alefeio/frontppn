import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalheComponent } from './trabalhe.component';

describe('TrabalheComponent', () => {
  let component: TrabalheComponent;
  let fixture: ComponentFixture<TrabalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
