import { Component , ViewChild } from '@angular/core';
import {AlertController ,  IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertCtrl : AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }


  alert(message : string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }



  registerUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
      .then(data=>{
        console.log('got data', data);
        alert('Registered!');
      })
      .catch(error =>{
        console.log('Got an error -> ', error);
        this.alert(error.message);
      });
    console.log("Would register user with " , this.user.value,this.password.value);
    this.navCtrl.pop();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
