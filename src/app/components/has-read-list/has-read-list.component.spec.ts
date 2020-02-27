import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HasReadListComponent } from './has-read-list.component';

describe('HasReadListComponent', () => {
  let component: HasReadListComponent;
  let fixture: ComponentFixture<HasReadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HasReadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HasReadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
