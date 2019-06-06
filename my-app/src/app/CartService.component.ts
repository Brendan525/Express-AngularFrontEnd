import { Component, OnInit } from '@angular/core';
import { Api } from '/Users/Brendan/Desktop/Angular-Side/my-app/src/app/services/api.service';
import { Router } from '@angular/router';
import { items } from '/Users/Brendan/Desktop/express-server/routes/cart-items.js';

interface ApiData {
    results: items[];
    id: number;
    product: string;
    quantity: number;
    
  }

export class CartServiceComponent implements OnInit {
    title ='cartItems';
    errorMessage: string;
    list: object[];

    constructor(private api: Api, private router: Router) {}
    ngOnInit() {
    
    getAllItems = () => {
      this.router.get('/', (req, res) => {
        res.json(items)
    });
        
        console.log('BUTTON CLICKED');
          this.api.getAllItems().subscribe(
            (data: ApiData) => {
            // console.log('GETTING DATA');
            this.list = data.results;
            this.errorMessage = null;
            // console.log(data)
          },
          error => {
            this.errorMessage = error.message;
          }
        );
          console.log('AFTER SUBSCRIBE IS CALLED')
      };
};
    };



