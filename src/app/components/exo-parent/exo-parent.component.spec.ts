import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoParentComponent } from './exo-parent.component';

describe('ExoParentComponent', () => {
  let component: ExoParentComponent;
  let fixture: ComponentFixture<ExoParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
