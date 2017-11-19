import { QuestionFactory } from './../../appcore/question.factory';
import { NavController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'comps-address',
   template:`<ion-card>
   <ion-card-header><b>Residence Address</b></ion-card-header>
   <ion-card-content>
       <dynamic-form [questions] ="questions" ></dynamic-form>
   </ion-card-content>
 </ion-card>`
})

export class Address implements OnInit {
    questions : any[];
    constructor(public navCtrl: NavController, private service: QuestionFactory) {
    }
    ngOnInit(){
        this.questions = this.service.getQuestions(this.PanelName());        
    }
    private PanelName(){
        return 'address';
    }
  }
