import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationImpl } from 'src/app/shared/models/authentification-impl';
import { AccountService } from 'src/app/shared/service/account-service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  message = "";

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
   /* if (this.form.invalid) {
        return;
    }*/

    const connexion = new AuthentificationImpl();
    connexion.login = this.form.controls['username'].value;
    connexion.password = this.form.controls['password'].value;
    console.log(connexion)
    this.accountService.authentification(connexion).subscribe((res) => {
      if (res == "KO") {
        this.message = "Erreur d'authentification"
      }
    })
  }
}
