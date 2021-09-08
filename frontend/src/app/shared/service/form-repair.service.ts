import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormRepairService {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      type: ['', [Validators.required]],
      facture: ['', [Validators.required]],
      voiture_id: [''],
    })
  }
}
