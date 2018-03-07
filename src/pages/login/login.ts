import { Component , ViewChild } from '@angular/core';
import {AlertController ,  IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {TabsPage} from "../tabs/tabs";



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') user;
  @ViewChild('password') password;


  constructor(private alertCtrl : AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  //this.navCtrl.setRoot(TabsPage);


  alert(message : string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser(){
    this.fire.auth.signInWithEmailAndPassword(this.user.value,this.password.value)
      .then(data=>{
        console.log("Got data from the user (login.ts)",data);
        this.alert("Success, u are logged in!");
        this.navCtrl.setRoot(TabsPage);
      }).catch(error=>{
      console.log("Got error(login.ts)",error);
      this.alert(error.message);
    });
    console.log("Would sign in with " , this.user.value,this.password.value);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
