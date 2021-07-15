import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shared/service/account-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = false;
  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.accountService.user.subscribe((response) => {
      console.log(response)
      if (response != undefined) {
        console.log("true")
        this.user = true;
      }
      else {
        console.log("false")
        this.user = false;
      }
    })
  }

  logout() {
    this.accountService.logout();
  }
}
