import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Voiture } from 'src/ws_contrat/target/generated-sources/gac/models';
import { VoitureService } from 'src/ws_contrat/target/generated-sources/gac/services';
import * as car from 'src/assets/carlist.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestion d\'automobile de collection';
  //public carList:{brand:string, models:string[]}[] = car;
  carList: any;

  constructor(private voitureService: VoitureService) {
  }

  ngOnInit() {
    this.carList = JSON.stringify(car);
  }

  getCar() {
    console.log("add");
    this.voitureService.getCarById("71001698-ac39-45c3-8249-dd3e29a66971").subscribe((response: Voiture) => {
      console.log(response);
    });
  }
}
