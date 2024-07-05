import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoformUsercardEnfant1Component } from './exoform-usercard-enfant1.component';

describe('ExoformUsercardEnfant1Component', () => {
  let component: ExoformUsercardEnfant1Component;
  let fixture: ComponentFixture<ExoformUsercardEnfant1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoformUsercardEnfant1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoformUsercardEnfant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
