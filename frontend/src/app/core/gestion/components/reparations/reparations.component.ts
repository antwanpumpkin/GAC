import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReparationImpl } from 'src/app/shared/models/reparation-impl';
import { ReparationsService } from 'src/app/shared/service/reparations.service';

@Component({
  selector: 'app-reparations',
  templateUrl: './reparations.component.html',
  styleUrls: ['./reparations.component.css']
})
export class ReparationsComponent implements OnInit {
  secteurList: any;
  reparationList: any;
  id: string
  
  secteurSelected = null;  
  reparationSelected = null;
  private _jsonURL = 'assets/reparations.json';

  constructor(private http: HttpClient, private reparationService: ReparationsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.get(this._jsonURL).subscribe(data =>{
      this.secteurList = data;
    })
    this.id = this.route.snapshot.paramMap.get('id');

    this.reparationService.getAllRepairs(this.id).subscribe((res) => {
      console.log(res);
    })
  }

  selectionSecteur(event: any) {
    this.secteurSelected = event.value
    this.reparationList = this.secteurList.filter(list => list.secteur == event.value)[0];
  }

  selectionReparation(event: any) {
    this.reparationSelected = event.value;
  }

  ajoutReparation() {
    const repair = new ReparationImpl();
    repair.facture = false;
    repair.type = this.reparationSelected;
    repair.voiture_id = this.id;

    this.reparationService.postRepair(repair).subscribe((res) => {
      console.log(res);
    })
  }

}
