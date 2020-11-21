import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// const fs = require('fs')

// // Create connection to database
// const config = {
//   authentication: {
//     options: {
//       userName: "minecraftian2020", // update me
//       password: "Robodragons675c" // update me
//     },
//     type: "default"
//   },
//   server: " gsuhackathon2020.database.windows.net", // update me
//   options: {
//     database: "gsuHackathonDB", //update me
//     encrypt: true
//   }
// };
// function queryDatabase() {
// console.log("Reading rows from the Table...");
//
// // Read all rows from table
// const request = new Request(
//   `SELECT TOP 20 pc.Name as CategoryName,
//                  p.name as ProductName
//    FROM [SalesLT].[ProductCategory] pc
//    JOIN [SalesLT].[Product] p ON pc.productcategoryid = p.productcategoryid`,
//   (err, rowCount) => {
//     if (err) {
//       console.error(err.message);
//     } else {
//       console.log(`${rowCount} row(s) returned`);
//     }
//   }
// );
//
// }
// const connection = new Connection(config);
// connection.on("connect", err => {
//   if (err) {
//     console.error(err.message);
//   } else {
//     queryDatabase();
//   }
// });

@Component({
  selector: 'app-new-account-page',
  templateUrl: './new-account-page.page.html',
  styleUrls: ['./new-account-page.page.scss'],
})
export class NewAccountPagePage implements OnInit {

  user:any = {};
  checkNewAccount(){
    console.log(this.user);
    // var fileURL = URL.createObjectURL('src/assets/text.txt');
  }


  constructor(private route: Router) { }

  ngOnInit() {
    // WriteToFile();
  }

}
