import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElineComponent } from './eline.component';

describe('ElineComponent', () => {
  let component: ElineComponent;
  let fixture: ComponentFixture<elineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ elineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(elineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
