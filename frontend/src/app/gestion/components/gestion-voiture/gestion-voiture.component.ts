import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/ws_contrat/target/generated-sources/gac/models';
import { VoitureService } from 'src/ws_contrat/target/generated-sources/gac/services';

@Component({
  selector: 'app-gestion-voiture',
  templateUrl: './gestion-voiture.component.html',
  styleUrls: ['./gestion-voiture.component.css']
})
export class GestionVoitureComponent implements OnInit {
  carList: any;
  modeleList: any;
  private _jsonURL = 'assets/carlist.json';
  carSelected = null;  
  modeleSelected = null;


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
    console.log("get car");
    this.voitureService.getCarById("71001698-ac39-45c3-8249-dd3e29a66971").subscribe((response: Voiture) => {
      console.log(response);
    });
  }

  updateSelection(event: any) {
    this.modeleList = this.carList.filter(list => list.brand == event.value)[0];
    console.log(this.modeleList)
  }

  enregistrer() {

  }
}
