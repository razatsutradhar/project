import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-account-page',
  templateUrl: './new-account-page.page.html',
  styleUrls: ['./new-account-page.page.scss'],
})
export class NewAccountPagePage implements OnInit {

  checkNewAccount(){
    this.route.navigate(['/home']);
  }

  constructor(private route: Router) { }

  ngOnInit() {
  }

}
