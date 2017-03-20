import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module'
import { HomeComponent } from './home.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      schemas : [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should do math', () => {
    expect (1+1).toEqual(2);
  })

  it('should correctly render ad date' , () => {
    expect(fixture.debugElement.nativeElement.innerHTML).toBe('')

    component.catgs = ["careers","cars","furniture","electronic","Other"];
    fixture.detectChanges()
    fixture.whenStable().then(() => {
    expect(fixture.debugElement.nativeElement.innerHTML).toBe('"careers","cars","furniture","electronic","Other"')
  })
  }
  
});
