import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagieComponent } from './magie.component';

describe('MagieComponent', () => {
  let component: MagieComponent;
  let fixture: ComponentFixture<MagieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
