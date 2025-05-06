import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tareas-pendientes',
  templateUrl: './tareas-pendientes.page.html',
  styleUrls: ['./tareas-pendientes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TareasPendientesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
