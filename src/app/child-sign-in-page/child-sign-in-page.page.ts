import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child-sign-in-page',
  templateUrl: './child-sign-in-page.page.html',
  styleUrls: ['./child-sign-in-page.page.scss'],
})
export class ChildSignInPagePage implements OnInit {

  checkChildSignIn(){
    console.log('checkChildSignIn pressed');
    this.route.navigate(['/child-tabs']);
  }

  constructor(private route: Router) { }

  ngOnInit() {
  }






}
