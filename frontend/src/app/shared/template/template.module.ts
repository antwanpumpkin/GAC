import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilFormComponent } from './profil-form/profil-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProfilFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ProfilFormComponent]
})
export class TemplateModule { }
