import { Component } from '@angular/core';
import { Voiture } from 'src/ws_contrat/target/generated-sources/gac/models';
import { VoitureService } from 'src/ws_contrat/target/generated-sources/gac/services';
import {environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private voitureService: VoitureService) {
  }

  getCar() {
    console.log("add");
    this.voitureService.rootUrl = environment.urlBe;
    console.log(this.voitureService.rootUrl)
    this.voitureService.getCarById("71001698-ac39-45c3-8249-dd3e29a66971").subscribe((response: Voiture) => {
      console.log(response);
    });
  }
}
