import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumiaComponent } from './jumia.component';

describe('JumiaComponent', () => {
  let component: JumiaComponent;
  let fixture: ComponentFixture<JumiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
