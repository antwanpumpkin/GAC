import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReparationImpl } from 'src/app/shared/models/reparation-impl';
import { FormRepairService } from 'src/app/shared/service/form-repair.service';
import { ReparationsService } from 'src/app/shared/service/reparations.service';
import { Repair } from 'src/ws_contrat/target/generated-sources/gac/models/repair';

@Component({
  selector: 'app-reparations',
  templateUrl: './reparations.component.html',
  styleUrls: ['./reparations.component.css']
})
export class ReparationsComponent implements OnInit {
  form: FormGroup
  secteurList: any;
  reparationList: any;
  listDoneRepairs: Array<Repair>;
  deleted: string;
  modeAvancee = false;
  submitted = false;
  type_revision = ['Vidange boite', 'Vidange moteur', 'Filtres', 'Pneus', 'Distribution', 'Freins']

  private _jsonURL = 'assets/json/reparations.json';

  constructor(private http: HttpClient, private reparationService: ReparationsService,
    private route: ActivatedRoute, private formRepairService: FormRepairService) { }

  ngOnInit(): void {
    this.form = this.formRepairService.form;
    this.form.reset();
    this.reparationList = null;
    this.http.get(this._jsonURL).subscribe(data =>{
      this.secteurList = data;
    })
    this.reparationService.getAllRepairs(this.route.snapshot.paramMap.get('id')).subscribe((res) => {
      console.log(res);
    })
    this.getReparations();
  }

  get f() {
    return this.form.controls;
  }

  selectionSecteur(event: any) {
    this.reparationList = this.secteurList.filter(list => list.secteur == event)[0];
    console.log(this.reparationList)
  }

  ajoutReparation() {
    const repair = new ReparationImpl();
    repair.facture = false;
    repair.type = this.f.type.value;
    repair.voiture_id = this.route.snapshot.paramMap.get('id');
    this.submitted = true;

    console.log(this.f.type.value)
    this.reparationService.postRepair(repair).subscribe((res) => {
      this.form.reset();
      this.deleted = "";
      this.reparationList = null;
      this.submitted = false;
      this.getReparations();
    })
  }

  getReparations() {
    this.reparationService.getAllRepairs(this.route.snapshot.paramMap.get('id')).subscribe((res) => {
      this.listDoneRepairs = res;
    });
  }

  deleteRepair(id: string) {
    this.reparationService.deleteRepair(id).subscribe((res) => {
      console.log(res);
      this.deleted = "Réparation supprimée";
      this.getReparations();
    }, error => {
      this.deleted = "Echec de la suppression";
    })
  }

  changementMode() {
    this.modeAvancee = !this.modeAvancee;
    this.f.type.setValue(null);
  }
}
