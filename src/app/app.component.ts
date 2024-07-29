import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Listar', url: 'listgatitos', icon: 'list' },
    { title: 'Agregar', url: 'addgatito', icon: 'add' },
    { title: 'Actualizar', url: 'updategatito', icon: 'refresh' },
    { title: 'Detalle', url: 'detailgatito', icon: 'eye' },
    { title: 'Eliminar', url: 'deletegatito', icon: 'trash' }
  ];
  public labels = [];
  constructor() {}
}
