import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { async } from '@angular/core/testing';


@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  infoarr: any[] = [];

  constructor(private storage: Storage) {
    this.cargarInfo();
  }
  
  guardarInfo(informacion) {
    // debugger
    this.infoarr.unshift(informacion);
    this.storage.set('info', this.infoarr);
  }

  async cargarInfo() {
    const informacion = await this.storage.get('info');
    if (informacion) {
      this.infoarr = informacion;
    }
    console.log(informacion);
  }
}
