import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LarkComponent } from './lark.component';

describe('LarkComponent', () => {
  let component: LarkComponent;
  let fixture: ComponentFixture<LarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
