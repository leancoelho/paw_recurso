import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosLocaisComponent } from './todos-locais.component';

describe('TodosLocaisComponent', () => {
  let component: TodosLocaisComponent;
  let fixture: ComponentFixture<TodosLocaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosLocaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosLocaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
