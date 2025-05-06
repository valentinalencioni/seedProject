import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ItemReorderEventDetail,
  IonItem,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
  IonHeader,
  IonToolbar,
  IonTitle, 
  IonContent
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-prioridad-tareas',
  templateUrl: './prioridad-tareas.page.html',
  styleUrls: ['./prioridad-tareas.page.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, IonHeader, IonToolbar, CommonModule, FormsModule, IonTitle, IonContent]
})
export class PrioridadTareasPage {

  constructor() { }
  handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  }
}
