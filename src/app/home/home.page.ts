import { Component } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
  MenuController,
  IonNav
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, IonContent, IonHeader, IonMenu, IonTitle, IonToolbar, IonNav],
})
export class HomePage {
  
  constructor(private menuCtrl: MenuController) {}
  private router: Router = new Router;
  async openFirstMenu() {
    await this.menuCtrl.open('tareas-pendientes');
    this.router.navigate(['/tareas-pendientes']);
  }

  async openSecondMenu() {
    /**
     * Open the menu by menu-id
     * We refer to the menu using an ID
     * because multiple "start" menus exist.
     */
    await this.menuCtrl.open('prioridad-tareas');
    this.router.navigate(['prioridad-tareas']);
  }

  async openEndMenu() {
    /**
     * Open the menu by side
     * We can refer to the menu by side
     * here because only one "end" menu exists
     */
    await this.menuCtrl.open('preferencias-tareas');
    this.router.navigate(['preferencias-tareas']);
  }
}
