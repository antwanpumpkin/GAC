import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'Gestion d\'automobile de collection';

  constructor() {
  }

  scroll(attr: string) {
    document.querySelector('#' + attr).scrollIntoView({behavior: 'smooth'});
  }
}