import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tareas-realizadas',
  templateUrl: './tareas-realizadas.page.html',
  styleUrls: ['./tareas-realizadas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TareasRealizadasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
