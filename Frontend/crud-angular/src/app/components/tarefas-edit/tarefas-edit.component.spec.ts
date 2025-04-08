import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasEditComponent } from './tarefas-edit.component';

describe('TarefasEditComponent', () => {
  let component: TarefasEditComponent;
  let fixture: ComponentFixture<TarefasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefasEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
