import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckerRegistration } from './trucker-registration';

describe('TruckerRegistration', () => {
  let component: TruckerRegistration;
  let fixture: ComponentFixture<TruckerRegistration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruckerRegistration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckerRegistration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
