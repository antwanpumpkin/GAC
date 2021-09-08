import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VoitureImpl } from 'src/app/shared/models/voiture-impl';
import { Car } from 'src/ws_contrat/target/generated-sources/gac/models/car';
import { CarService } from 'src/ws_contrat/target/generated-sources/gac/services/car.service';
import { GestionVoitureService } from 'src/app/shared/service/gestion.voiture.service';
import { AuthGuard } from 'src/app/shared/service/auth-guard';

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
  deleted: string;

  listAllCars: Array<Car>;

  constructor(private carService: CarService, private http: HttpClient, 
    private gestionVoitureService: GestionVoitureService, private authGuard: AuthGuard) {
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


  getAllCars() {
    this.gestionVoitureService.getAllCars().subscribe((res) => {
      this.listAllCars = res;
    })
    console.log(this.listAllCars);
  }

  deleteCar(id: any) {
    this.voitureEnregistree = false;
    console.log("demande suppresion voiture avec id: " + id);
    this.carService.deleteCar(id).subscribe((response: string) => {
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
    this.voiture.userId = this.authGuard.user.id;
    this.voiture.marque = this.brandSelected;
    this.voiture.modele = this.modeleSelected;
    this.voiture.premiereImmat = null//this.premiereImmat;
    this.voiture.prixDachat = this.prixAchat;
    this.voiture.prixVenteEstimee = this.prixVenteEstimee;
    this.voiture.puissanceFiscale = this.puissanceFiscale;

    console.log(this.voiture);
    this.carService.addCar(this.voiture).subscribe(() => {
      this.deleted = "";
      this.voitureEnregistree = true;
      this.getAllCars();
    }, error => {
      this.voitureEnregistree = false;
      console.log(error);
    })
  }

  modifier() {
  }
}
