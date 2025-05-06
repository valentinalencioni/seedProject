import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCheckbox, IonItem, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tareas-pendientes',
  templateUrl: './tareas-pendientes.page.html',
  styleUrls: ['./tareas-pendientes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCheckbox, IonItem, IonList]
})
export class TareasPendientesPage {

  tareas = [
    { descripcion: 'Diseñar interfaces responsivas', completada: false },
    { descripcion: 'Implementar componentes reutilizables', completada: false },
    { descripcion: 'Conectar API REST', completada: false },
    { descripcion: 'Escribir pruebas unitarias', completada: false },
    { descripcion: 'Depurar errores en el navegador', completada: false },
  ];
}
