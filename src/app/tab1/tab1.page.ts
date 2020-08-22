import { Component } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private dataLocalService: DataLocalService) { }
  
  guardar() {
    this.dataLocalService.guardarInfo('prueba2');
  }



}
