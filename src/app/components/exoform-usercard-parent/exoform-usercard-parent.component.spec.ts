import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoformUsercardParentComponent } from './exoform-usercard-parent.component';

describe('ExoformUsercardParentComponent', () => {
  let component: ExoformUsercardParentComponent;
  let fixture: ComponentFixture<ExoformUsercardParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoformUsercardParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoformUsercardParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
