import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCityComponent } from './time-city.component';

describe('TimeCityComponent', () => {
  let component: TimeCityComponent;
  let fixture: ComponentFixture<TimeCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeCityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
