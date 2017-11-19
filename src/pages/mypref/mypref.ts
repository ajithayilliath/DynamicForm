import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: "page-mypref",
    templateUrl: "mypref.html"
})

export class MyprefPage{
    cities
    constructor(public navCtrl: NavController){
        this.initializeItems();
    }
    initializeItems(){
        this.cities = [
            'Amsterdam',
            'Bogota',
            'Buenos Aires',
            'Cairo',
            'Dhaka',
            'Edinburgh',
            'Geneva',
            'Genoa',
            'Glasglow',
            'Hanoi',
            'Hong Kong',
            'Islamabad',
            'Istanbul',
            'Jakarta',
            'Kiel',
            'Kyoto',
            'Le Havre',
            'Lebanon',
            'Lhasa',
            'Lima',
            'London',
            'Los Angeles',
            'Madrid',
            'Manila',
            'New York',
            'Olympia',
            'Oslo',
            'Panama City',
            'Peking',
            'Philadelphia',
            'San Francisco',
            'Seoul',
            'Taipeh',
            'Tel Aviv',
            'Tokio',
            'Uelzen',
            'Washington'
          ];
    }
    getItems(ev){
        this.initializeItems();
        var val = ev.target.value;
        if(val && val.trim() != ''){
            this.cities = this.cities.filter((city) => {
                return (city.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }
    itemSelected(item:string){
        console.log("Selected Item",item);
    }
}