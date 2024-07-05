import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoformUsercardEnfant2Component } from './exoform-usercard-enfant2.component';

describe('ExoformUsercardEnfant2Component', () => {
  let component: ExoformUsercardEnfant2Component;
  let fixture: ComponentFixture<ExoformUsercardEnfant2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoformUsercardEnfant2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoformUsercardEnfant2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
