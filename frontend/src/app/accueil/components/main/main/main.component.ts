import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/ws_contrat/target/generated-sources/gac/models';
import { VoitureService } from 'src/ws_contrat/target/generated-sources/gac/services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'Gestion d\'automobile de collection';
  //public carList:{brand:string, models:string[]}[] = car;
  carList: any;
  private _jsonURL = 'assets/carlist.json';

  constructor(private voitureService: VoitureService, private http: HttpClient) {
  }

  ngOnInit() {
    console.log("ini")
    this.http.get(this._jsonURL).subscribe(data =>{
      this.carList = data;
      console.log(data);
    })
  }

  getCar() {
    console.log("add");
    this.voitureService.getCarById("71001698-ac39-45c3-8249-dd3e29a66971").subscribe((response: Voiture) => {
      console.log(response);
    });
  }
}