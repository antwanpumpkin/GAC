import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'Gestion d\'automobile de collection';

  constructor() {
  }

  ngOnInit() {
  }

  scroll(attr: string) {
    document.querySelector('#' + attr).scrollIntoView({behavior: 'smooth'})
  }

}