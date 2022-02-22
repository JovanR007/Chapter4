import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedStudentComponent } from './selected-student.component';

describe('SelectedStudentComponent', () => {
  let component: SelectedStudentComponent;
  let fixture: ComponentFixture<SelectedStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
