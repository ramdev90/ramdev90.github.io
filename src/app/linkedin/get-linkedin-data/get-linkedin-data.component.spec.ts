import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLinkedinDataComponent } from './get-linkedin-data.component';

describe('GetLinkedinDataComponent', () => {
  let component: GetLinkedinDataComponent;
  let fixture: ComponentFixture<GetLinkedinDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetLinkedinDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetLinkedinDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
