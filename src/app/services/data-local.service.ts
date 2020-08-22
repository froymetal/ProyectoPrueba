import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { async } from '@angular/core/testing';


@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  infoarr: Array<string>[] = [];

  constructor(private storage: Storage) { }
  
  guardarInfo(informacion) {
    // debugger
    this.infoarr.unshift(informacion);
    this.storage.set('info', informacion);
  }

  async cargarInfo() {
    const informacion = await this.storage.get('info');
    this.infoarr = informacion;
  }
}
