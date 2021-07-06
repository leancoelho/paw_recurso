import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarLocaisComponent } from './criar-locais.component';

describe('CriarLocaisComponent', () => {
  let component: CriarLocaisComponent;
  let fixture: ComponentFixture<CriarLocaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarLocaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarLocaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
