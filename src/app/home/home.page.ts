import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  createNewAccountPage (){
    console.log('parent');
    this.route.navigate(['/new-account-page']);
  }

  parentSignIn (){
    console.log('parent');
    this.route.navigate(['/parent-sign-in-page']);
  }

  childSignIn(){
    console.log('child');
    this.route.navigate(['/child-sign-in-page']);
  }


  // constructor(public navCtrl: NavController) {}
  constructor(private route: Router) {}

}
