import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyNumberDirective } from './directive/only-number.directive';
import { ProfilFormComponent } from './template/profil-form/profil-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [OnlyNumberDirective, ProfilFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    OnlyNumberDirective,
    ProfilFormComponent
  ]
})
export class SharedModule { }
