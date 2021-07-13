import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInfosImpl } from 'src/app/shared/models/user-infos-impl';
import { AccountService } from 'src/app/shared/service/account-service';
import { UtilisateurService } from 'src/ws_contrat/target/generated-sources/gac/services/utilisateur.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private accountService: AccountService,
    private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(6)]
    })
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    console.log("submit");
    this.submitted = true;

    console.log(this.form.controls)
   
    /*if (this.form.invalid) {
      return;
    }*/

    const user = new UserInfosImpl();
    user.login = this.form.controls['username'].value;
    user.prenom = this.form.controls['firstname'].value;
    user.nom = this.form.controls['lastname'].value;
    user.password = this.form.controls['password'].value;

    this.loading = true;
    this.accountService.createUser(user).subscribe((response) => {
      console.log(response)
    });
  }
}
