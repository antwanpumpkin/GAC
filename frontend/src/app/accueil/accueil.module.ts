import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main/main.component';
import { AccueilInterfaceComponent } from './container/accueil-interface/accueil-interface.component';

@NgModule({
  declarations: [MainComponent, AccueilInterfaceComponent],
  imports: [
    CommonModule
  ]
})
export class AccueilModule { }
