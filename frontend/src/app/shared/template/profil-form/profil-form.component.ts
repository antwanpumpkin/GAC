import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusAccount } from 'src/app/shared/enum/status-account.enum';
import { UserInfosImpl } from 'src/app/shared/models/user-infos-impl';
import { AccountService } from 'src/app/shared/service/account-service';
import { FormAccountService } from 'src/app/shared/service/form-account.service';

@Component({
  selector: 'app-profil-form',
  templateUrl: './profil-form.component.html',
  styleUrls: ['./profil-form.component.css']
})
export class ProfilFormComponent implements OnInit {
  @Input() creation: boolean;
  form: FormGroup;
  loading = false;
  submitted = false;
  message = "";
  user: UserInfosImpl;

  constructor(private formAccountService: FormAccountService, private accountService: AccountService) { }

  ngOnInit() {
    this.form = this.formAccountService.form;
    console.log("is consult: " + this.creation)
    if (!this.creation) {
      this.user = this.accountService.getUser();
      console.log(this.user);
      this.f.prenom.setValue(this.user.prenom);
      this.f.nom.setValue(this.user.nom);
      this.f.username.setValue(this.user.login);
      this.f.username.disable();
    }
    else {
      this.f.prenom.setValue("");
      this.f.nom.setValue("");
      this.f.username.setValue("");
    }
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    console.log("submit");
    this.message = "";
    this.submitted = true;

    if (!this.creation) {
      this.updateProfil();
    }
    else {
      console.log(this.form.invalid)
      if (this.form.invalid) {
        return;
      }

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

  updateProfil() {
    const user = new UserInfosImpl();
    user.prenom = this.form.controls['prenom'].value != '' ? this.form.controls['prenom'].value : null;
    user.nom = this.form.controls['nom'].value != '' ? this.form.controls['nom'].value : null;
    user.password = this.form.controls['password'].value != '' ? this.form.controls['password'].value : null;
    user.login = this.form.controls['username'].value;

    this.loading = true;
    this.accountService.modificationProfil(user).subscribe((response) => {
      this.loading = false;
      if (response == StatusAccount.KO) {
        this.message = "Erreur sur la modification de compte"
      }
      else {
        this.message = "Profil mis à jour"
      }
    });
  }
}
