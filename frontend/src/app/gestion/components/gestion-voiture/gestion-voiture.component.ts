import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VoitureImpl } from 'src/app/shared/models/voiture-impl';
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

  brandSelected = null;  
  modeleSelected = null;
  premiereImmat = null;
  puissanceFiscale = null;
  prixAchat = null;
  prixVenteEstimee = null;
  voiture : VoitureImpl;
  voitureEnregistree = false;
  idRegistered : string;
  carGetted : Voiture;
  deleted: string;

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
    this.voitureService.getCarById(this.idRegistered).subscribe((response: Voiture) => {
      console.log(response);
      this.carGetted = response;
      this.carGetted.marque
    });
  }

  deleteCar() {
    console.log("delete car");
    this.voitureService.deleteCar(this.idRegistered).subscribe((response: string) => {
      console.log(response);
      this.deleted = response;
    });
  }

  selectionMarque(event: any) {
    this.brandSelected = event.value
    this.modeleList = this.carList.filter(list => list.brand == event.value)[0];
    console.log(this.modeleList)
  }

  selectionModele(event: any) {
    this.modeleSelected = event.value;
  }

  enregistrer() {
    let date = new Date();
    
    this.voiture = new VoitureImpl();
    this.voiture.marque = this.brandSelected;
    this.voiture.modele = this.modeleSelected;
    this.voiture.premiereImmat = null//this.premiereImmat;
    this.voiture.prixDachat = this.prixAchat;
    this.voiture.prixVenteEstimee = this.prixVenteEstimee;
    this.voiture.puissanceFiscale = this.puissanceFiscale;

    console.log(this.voiture);
    this.voitureService.addCar(this.voiture).subscribe((response) => {
      this.voitureEnregistree = true;
      this.idRegistered = response.replace(/\"/g,"");
      console.log(this.idRegistered);
    }, error => {
      this.voitureEnregistree = false;
      console.log(error);
    })
  }


}
