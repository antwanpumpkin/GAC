import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VoitureImpl } from 'src/app/shared/models/voiture-impl';
import { Voiture } from 'src/ws_contrat/target/generated-sources/gac/models';
import { VoitureService } from 'src/ws_contrat/target/generated-sources/gac/services';
import { GestionVoitureService } from 'src/app/shared/service/gestion.voiture.service';

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
  deleted: string;

  listAllCars: Array<Voiture>;

  constructor(private voitureService: VoitureService, private http: HttpClient, 
    private gestionVoitureService: GestionVoitureService) {
    this.gestionVoitureService.getCarState().subscribe((value) => {
      console.log(value);
    })
  }

  ngOnInit() {
    this.http.get(this._jsonURL).subscribe(data =>{
      this.carList = data;
    })
    this.getAllCars();
  }

  getCar() {
    this.gestionVoitureService.getCar(this.idRegistered).subscribe((res) => {
      console.log(res);
    })
  }

  getAllCars() {
    this.gestionVoitureService.getAllCars().subscribe((res) => {
      this.listAllCars = res;
    })
    console.log(this.listAllCars);
  }

  deleteCar(id: any) {
    console.log("demande suppresion voiture avec id: " + id);
    this.voitureService.deleteCar(id).subscribe((response: string) => {
      console.log(response);
      this.deleted = "Voiture supprimée";
      this.getAllCars();
    }, error => {
      this.deleted = "Echec de la suppression";
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
    this.voiture.userId = "00000000-0000-0000-0000-000000000001";
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
      this.getAllCars();
    }, error => {
      this.voitureEnregistree = false;
      console.log(error);
    })
  }

  modifier() {

  }


}
