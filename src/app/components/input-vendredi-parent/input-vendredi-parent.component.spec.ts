import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputVendrediParentComponent } from './input-vendredi-parent.component';

describe('InputVendrediParentComponent', () => {
  let component: InputVendrediParentComponent;
  let fixture: ComponentFixture<InputVendrediParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputVendrediParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputVendrediParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
