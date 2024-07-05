import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoInputVendrediComponent } from './exo-input-vendredi.component';

describe('ExoInputVendrediComponent', () => {
  let component: ExoInputVendrediComponent;
  let fixture: ComponentFixture<ExoInputVendrediComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoInputVendrediComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoInputVendrediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
