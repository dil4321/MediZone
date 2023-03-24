import { Component,OnInit } from '@angular/core';
import { MatCardModule } from "@angular/material/card";

import { Loader } from '@googlemaps/js-api-loader';
//import { styles } from './mapstyles';

import shop from './shop.json';
import product from './product.json';
console.log(product);



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: '<input type="text" [(ngModel)]="searchText" (keydown.enter)="search()" placeholder="Search..."><button (click)="search()">Search</button>',
  styleUrls: ['./app.component.css']
})


export class AppComponent /*implements OnInit*/ {
  display = true;
  title = 'medizone';
  searchText: string = "";
  user = ['asas','sasasa'];
  public shopList:{id:string, name:string, des:String, address:String, contact:String, price:String, lat:Number, location:String}[] = shop;
  public productList:{id:string, name:string, address:String, contact:String, price:String}[] = product;
  
  //title = 'google-maps';
 
  private map: google.maps.Map | undefined
 
  /*ngOnInit(): void {
    for (var i in this.shopList) {
      
    
      let loader = new Loader({
        apiKey: 'AIzaSyDp51TWrCe9TEG_22qFY5S2ApeVLIK1jXU',
      });
  
      loader.load().then(() => {
        console.log('loaded gmaps')
      var lat1 = 45;
      var lng2 = Number(this.shopList[i].lat);
      var lat = lat1;
      var lng = lng2;
      const location = {lat,lng} ;//{ lat: 51.233334, lng: 6.783333 }
      console.log(this.shopList[i].id);
      console.log(lng2);
  
        this.map = new google.maps.Map(document.getElementById("map")!, {
          center: location,
          zoom: 6,
          //styles: styles
        })
  
        const marker = new google.maps.Marker({
          position: location,
          map: this.map,
        });
      })
    }
  }*/
  

  search() {
    console.log("Searching for: " + this.searchText);
    if(this.searchText == '' || this.searchText.length<3){
      this.display=true;
    }else{
      this.display=false;
    }
    
    
    console.log(this.searchText.length);
    
  }
}
