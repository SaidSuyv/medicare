import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeDateComponent } from './make-date.component';

describe('MakeDateComponent', () => {
  let component: MakeDateComponent;
  let fixture: ComponentFixture<MakeDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
