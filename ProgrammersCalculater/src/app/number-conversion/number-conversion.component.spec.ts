import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberConversionComponent } from './number-conversion.component';

describe('NumberConversionComponent', () => {
  let component: NumberConversionComponent;
  let fixture: ComponentFixture<NumberConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberConversionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
