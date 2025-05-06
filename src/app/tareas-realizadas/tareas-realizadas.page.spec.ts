import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TareasRealizadasPage } from './tareas-realizadas.page';

describe('TareasRealizadasPage', () => {
  let component: TareasRealizadasPage;
  let fixture: ComponentFixture<TareasRealizadasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasRealizadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
