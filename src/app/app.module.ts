import { ModelService } from './../appcore/model.service';
import { Customer } from './../comps/customer/customer';
import { RuleService } from './../appcore/rules.service';
import { Address } from './../comps/address/address';
import { QuestionFactory } from './../appcore/question.factory';
import { DynamicFormComponent } from '../appcore/dynamic-form.component';
import { DynamicFormQuestionComponent } from '../appcore/dynamic-form-question.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {ReactiveFormsModule} from '@angular/forms';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MyprefPage } from '../pages/mypref/mypref';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MyprefPage,
    TabsPage,
    Address,
    Customer,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MyprefPage,
    TabsPage,
    Address,
    Customer
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QuestionFactory,
    RuleService,
    ModelService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
