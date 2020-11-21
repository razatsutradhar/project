import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const childSignInBtn = document.querySelector('#child-button-confirm');

@Component({
  selector: 'app-child-sign-in-page',
  templateUrl: './child-sign-in-page.page.html',
  styleUrls: ['./child-sign-in-page.page.scss'],
})
export class ChildSignInPagePage implements OnInit {

  checkChildSignIn(){
    this.route.navigate(['/child-tabs']);
  }

  constructor(private route: Router) { }

  ngOnInit() {
  }



}
