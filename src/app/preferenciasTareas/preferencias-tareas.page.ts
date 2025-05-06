import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tareas-realizadas',
  templateUrl: './preferencias-tareas.page.html',
  styleUrls: ['./preferencias-tareas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonList, IonToggle]
})
export class TareasRealizadasPage {

}




