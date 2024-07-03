import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoEnfantComponent } from './exo-enfant.component';

describe('ExoEnfantComponent', () => {
  let component: ExoEnfantComponent;
  let fixture: ComponentFixture<ExoEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoEnfantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
