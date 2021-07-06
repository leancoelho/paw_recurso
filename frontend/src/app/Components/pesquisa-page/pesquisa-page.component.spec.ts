import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaPageComponent } from './pesquisa-page.component';

describe('PesquisaPageComponent', () => {
  let component: PesquisaPageComponent;
  let fixture: ComponentFixture<PesquisaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
