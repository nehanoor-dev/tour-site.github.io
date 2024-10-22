import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarBusinessComponent } from './navbar-business.component';

describe('NavbarBusinessComponent', () => {
  let component: NavbarBusinessComponent;
  let fixture: ComponentFixture<NavbarBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarBusinessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
