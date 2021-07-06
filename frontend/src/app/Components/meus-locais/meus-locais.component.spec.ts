import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusLocaisComponent } from './meus-locais.component';

describe('MeusLocaisComponent', () => {
  let component: MeusLocaisComponent;
  let fixture: ComponentFixture<MeusLocaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeusLocaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusLocaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
