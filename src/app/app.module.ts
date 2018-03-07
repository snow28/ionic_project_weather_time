import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthPage } from '../pages/auth/auth';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { TimePage } from '../pages/time/time';
import { SettingsPage } from '../pages/settings/settings';
import { WeatherPage } from '../pages/weather/weather';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import {AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


var config = {
  apiKey: "AIzaSyAkWn4YCKTZ7Njl5hG9cQ8SUArJ1QB71vE",
  authDomain: "turkishfirst-b78ed.firebaseapp.com",
  databaseURL: "https://turkishfirst-b78ed.firebaseio.com",
  projectId: "turkishfirst-b78ed",
  storageBucket: "",
  messagingSenderId: "643642858379"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AuthPage,
    LoginPage,
    RegisterPage,
    TimePage,
    SettingsPage,
    WeatherPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AuthPage,
    LoginPage,
    RegisterPage,
    TimePage,
    SettingsPage,
    WeatherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
