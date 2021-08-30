import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusAccount } from 'src/app/shared/enum/status-account.enum';
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
  message = "";

  constructor(private formBuilder: FormBuilder, private accountService: AccountService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(6)]
    })
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    console.log("submit");
    this.message = "";
    this.submitted = true;

    console.log(this.form.controls)
   
    /*if (this.form.invalid) {
      return;
    }*/

    const user = new UserInfosImpl();
    user.prenom = this.form.controls['prenom'].value;
    user.nom = this.form.controls['nom'].value;
    user.login = this.form.controls['username'].value;
    user.password = this.form.controls['password'].value;

    this.loading = true;
    this.accountService.createUser(user).subscribe((response) => {
      this.loading = false;
      if (response == StatusAccount.KO) {
        this.message = "Erreur sur la création de compte"
      }
      else {
        this.message = "Vous pouvez vous connecter avec vos identifiants"
      }
    });
  }
}
