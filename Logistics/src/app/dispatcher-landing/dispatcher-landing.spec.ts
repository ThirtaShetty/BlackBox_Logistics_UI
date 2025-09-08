import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatcherLanding } from './dispatcher-landing';

describe('DispatcherLanding', () => {
  let component: DispatcherLanding;
  let fixture: ComponentFixture<DispatcherLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispatcherLanding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispatcherLanding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
