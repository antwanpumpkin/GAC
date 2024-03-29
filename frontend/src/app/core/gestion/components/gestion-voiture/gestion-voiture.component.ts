import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VoitureImpl } from 'src/app/shared/models/voiture-impl';
import { Car } from 'src/ws_contrat/target/generated-sources/gac/models/car';
import { CarService } from 'src/ws_contrat/target/generated-sources/gac/services/car.service';
import { GestionVoitureService } from 'src/app/shared/service/gestion.voiture.service';
import { AuthGuard } from 'src/app/shared/service/auth-guard';
import { FormCarService } from 'src/app/shared/service/form-car.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gestion-voiture',
  templateUrl: './gestion-voiture.component.html',
  styleUrls: ['./gestion-voiture.component.css']
})
export class GestionVoitureComponent implements OnInit {
  carList: any;
  modeleList: any;
  private _jsonURL = 'assets/json/carlist.json';

  form: FormGroup;
  voiture : VoitureImpl;
  voitureEnregistree = false;
  deleted: string;
  submitted = false;
  listAllCars: Array<Car>;

  constructor(private carService: CarService, private http: HttpClient, 
    private gestionVoitureService: GestionVoitureService, private authGuard: AuthGuard,
    private formCarService: FormCarService) {
      this.form = this.formCarService.form;
    this.gestionVoitureService.getCarState().subscribe((value) => {
      console.log(value);
    })
  }

  ngOnInit() {
    this.form.reset();
    this.modeleList = null;
    this.http.get(this._jsonURL).subscribe(data =>{
      this.carList = data;
    })
    this.getAllCars();
  }

  get f() {
    return this.form.controls;
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
    this.f.marque.setValue(event);
    this.modeleList = this.carList.filter(list => list.brand == event)[0];
    console.log(this.modeleList)
  }

  selectionModele(event: any) {
    this.f.modele.setValue(event);
  }

  enregistrer() {
    let date = new Date();
    this.submitted = true;

    console.log(this.form.invalid)
    if (this.form.invalid) {
      return;
    }
    this.voiture = new VoitureImpl();
    this.voiture.userId = this.authGuard.user.id;
    this.voiture.marque = this.f.marque.value;
    this.voiture.modele = this.f.modele.value;
    this.voiture.premiereImmat = null//this.premiereImmat;
    this.voiture.prixDachat = this.f.prixAchat.value;
    this.voiture.prixVenteEstimee = this.f.prixVenteEstimee.value;
    this.voiture.puissanceFiscale = this.f.puissanceFiscale.value;

    console.log(this.voiture);
    this.carService.addCar(this.voiture).subscribe(() => {
      this.deleted = "";
      this.voitureEnregistree = true;
      this.getAllCars();
      this.form.reset();
      this.modeleList = null;
      this.submitted = false;
    }, error => {
      this.voitureEnregistree = false;
      console.log(error);
    })
  }

  modifier() {
  }
}
