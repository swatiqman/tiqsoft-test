import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MychurchComponent } from './mychurch.component';

describe('MychurchComponent', () => {
  let component: MychurchComponent;
  let fixture: ComponentFixture<MychurchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MychurchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MychurchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
