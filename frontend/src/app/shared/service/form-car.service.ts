import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormCarService {
    form: FormGroup;

    constructor(private formBuilder: FormBuilder) { 
      this.form = this.formBuilder.group({
        marque: ['', [Validators.required]],
        modele: ['', [Validators.required]],
        premiereImmat: ['', [Validators.required]],
        puissanceFiscale: ['', [Validators.required]],
        prixAchat: ['', [Validators.required]],
        prixVenteEstimee: ['', [Validators.required]],
      })
    }
}
