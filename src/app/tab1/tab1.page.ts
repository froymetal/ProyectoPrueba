import { Component } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  usuario = {
    nombre: '',
    email: '',
    password: ''
  };

  constructor(private dataLocalService: DataLocalService) { }
  
  guardar() {
    // debugger
    console.log(this.usuario);
    this.dataLocalService.guardarInfo(this.usuario);
  }

  onSubmit() {
    debugger
    console.log(this.usuario);
  }

}
