import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrioridadTareasPage } from './prioridad-tareas.page';

describe('PrioridadTareasPage', () => {
  let component: PrioridadTareasPage;
  let fixture: ComponentFixture<PrioridadTareasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioridadTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
