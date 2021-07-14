import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shared/service/account-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
  }

  isConnected(): boolean {
    this.accountService.user.subscribe((response) => {
      console.log(response);
      if (response != null) {
        return true;
      }
      return false;
    })
    return false;
  }

  logout() {
    this.accountService.logout();
  }
}
