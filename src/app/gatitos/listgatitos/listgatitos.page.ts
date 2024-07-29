import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { IGatitos } from 'src/app/interfaces/igatitos';
import { SGatitosService } from 'src/app/services/sgatitos.service';

@Component({
  selector: 'app-listgatitos',
  templateUrl: './listgatitos.page.html',
  styleUrls: ['./listgatitos.page.scss'],
})
export class ListgatitosPage{

  gatitos: IGatitos[] = [];

  constructor(private gatitosService: SGatitosService, private loadingCtrl: LoadingController) { }

  ionViewWillEnter() {
    this.loadGatitos();
  }

  // Método para cargar gatitos
  async loadGatitos(event?: InfiniteScrollCustomEvent) {
    // Crear un loading para mostrar mientras se cargan los gatitos con un spinner de burbujas y un mensaje
    const loading = await this.loadingCtrl.create({
      message: 'Cargando gatitos...',
      spinner: 'bubbles'
      }
    );
    // Mostrar el loading
    await loading.present();

    // Llamar al servicio para listar los gatitos y suscribirse a la respuesta
    this.gatitosService.listarGatitos().subscribe(response => {
      //loading.dismiss() para cerrar el loading antes de mostrar los gatitos
      loading.dismiss();
      // Convertir la respuesta a string y luego a JSON para poder mostrar los gatitos
      let listString = JSON.stringify(response);
      this.gatitos = JSON.parse(listString);
      // Si el evento existe, completa el evento
      event?.target.complete();
    },
    // Si hay un error, mostrar un mensaje en la consola y cerrar el loading
    error => {
      console.log(error.message)
      loading.dismiss();
    });
  }
}
