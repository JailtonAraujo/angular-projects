import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmoduleComponent } from './testmodule.component';

describe('TestmoduleComponent', () => {
  let component: TestmoduleComponent;
  let fixture: ComponentFixture<TestmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestmoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
