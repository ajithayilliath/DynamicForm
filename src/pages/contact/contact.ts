import { QuestionFactory } from './../../appcore/question.factory';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  questions : any[];
  constructor(public navCtrl: NavController, service: QuestionFactory) {
      this.questions = service.getQuestions('contact');
  }
}
