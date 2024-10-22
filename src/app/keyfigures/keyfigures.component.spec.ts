import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyfiguresComponent } from './keyfigures.component';

describe('KeyfiguresComponent', () => {
  let component: KeyfiguresComponent;
  let fixture: ComponentFixture<KeyfiguresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyfiguresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyfiguresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
