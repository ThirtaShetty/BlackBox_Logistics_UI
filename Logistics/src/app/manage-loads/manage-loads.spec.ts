import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLoads } from './manage-loads';

describe('ManageLoads', () => {
  let component: ManageLoads;
  let fixture: ComponentFixture<ManageLoads>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageLoads]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageLoads);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
