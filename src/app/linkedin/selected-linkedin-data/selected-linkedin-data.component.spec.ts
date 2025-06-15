import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedLinkedinDataComponent } from './selected-linkedin-data.component';

describe('SelectedLinkedinDataComponent', () => {
  let component: SelectedLinkedinDataComponent;
  let fixture: ComponentFixture<SelectedLinkedinDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedLinkedinDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedLinkedinDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
