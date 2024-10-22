import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSolnComponent } from './business-soln.component';

describe('BusinessSolnComponent', () => {
  let component: BusinessSolnComponent;
  let fixture: ComponentFixture<BusinessSolnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessSolnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessSolnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
