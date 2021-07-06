import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMeuLocalComponent } from './ver-meu-local.component';

describe('VerMeuLocalComponent', () => {
  let component: VerMeuLocalComponent;
  let fixture: ComponentFixture<VerMeuLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerMeuLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMeuLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
