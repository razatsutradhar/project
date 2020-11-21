import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-parent-sign-in-page',
  templateUrl: './parent-sign-in-page.page.html',
  styleUrls: ['./parent-sign-in-page.page.scss'],
})
export class ParentSignInPagePage implements OnInit {

  checkParentSignIn(){
    this.route.navigate(['/parent-tabs']);
  }

  constructor(private route: Router) { }

  ngOnInit() {
  }


}
