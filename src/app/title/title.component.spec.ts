import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should be defined function 'getTitle'`, () => {
    expect(component.getTitle).toBeTruthy();
  });

  it(`should use getTitle function in H1`, () => {
    component.getTitle = function(){
      return 'fake';
    };
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(element.textContent).toBe('fake');
  });
});
