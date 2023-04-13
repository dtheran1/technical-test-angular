import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { DOCUMENT } from '@angular/common';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let document: Document;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ { provide: DOCUMENT, useValue: document } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    document = TestBed.inject(DOCUMENT);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isDarkActive to true if user preference is dark', () => {
    spyOn(localStorage, 'getItem').and.returnValue('dark');
    component.getDataLocal();
    expect(component.isDarkActive).toEqual(true);
  });

  it('should set isDarkActive to false if user preference is not dark', () => {
    spyOn(localStorage, 'getItem').and.returnValue('ligth');
    component.getDataLocal();
    expect(component.isDarkActive).toEqual(false);
  });

  it('should call saveLocal method when toggleTheme method is called', () => {
    spyOn(component, 'saveLocal');
    component.toggleTheme();
    expect(component.saveLocal).toHaveBeenCalled();
  });

  it('should toggle document.documentElement.classList when toggleTheme method is called', () => {
    const classListSpy = spyOn(document.documentElement.classList, 'toggle');
    component.toggleTheme();
    expect(classListSpy).toHaveBeenCalled();
  });

  it('should save user preference to localStorage when saveLocal method is called', () => {
    spyOn(localStorage, 'setItem');
    component.saveLocal();
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
