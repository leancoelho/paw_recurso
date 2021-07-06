import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerLocalComponent } from './ver-local.component';

describe('VerLocalComponent', () => {
  let component: VerLocalComponent;
  let fixture: ComponentFixture<VerLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
