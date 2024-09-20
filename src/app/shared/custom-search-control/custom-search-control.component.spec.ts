import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSearchControlComponent } from './custom-search-control.component';

describe('CustomSearchControlComponent', () => {
  let component: CustomSearchControlComponent;
  let fixture: ComponentFixture<CustomSearchControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSearchControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSearchControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
