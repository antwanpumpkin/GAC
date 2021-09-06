import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reparations',
  templateUrl: './reparations.component.html',
  styleUrls: ['./reparations.component.css']
})
export class ReparationsComponent implements OnInit {
  secteurList: any;
  reparationList: any;

  
  secteurSelected = null;  
  reparationSelected = null;
  private _jsonURL = 'assets/reparations.json';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this._jsonURL).subscribe(data =>{
      this.secteurList = data;
    })
  }

  selectionSecteur(event: any) {
    this.secteurSelected = event.value
    this.reparationList = this.secteurList.filter(list => list.secteur == event.value)[0];
  }

  selectionReparation(event: any) {
    this.reparationSelected = event.value;
  }

}
