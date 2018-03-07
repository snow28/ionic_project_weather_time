import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the TimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time',
  templateUrl: 'time.html',
})
export class TimePage {
  default:any;
  url = "http://api.apixu.com/v1/current.json?key=d05eb52e69c14c51a06162137182002&q=";
  defaultCity:string = "Lodz";
  cityName:string; // connected with input field in html
  citiesSubsription;
  cities:any[];
  timeAll:any[] = [];


  constructor( private alertCtrl : AlertController, public db: AngularFireDatabase , public navCtrl: NavController, public navParams: NavParams , private http: HttpClient) {
    this.http.get(this.url + this.defaultCity).subscribe(data=>{
      this.default = data;
      console.log(this.default);
    });


    this.citiesSubsription = this.db.list('/citiesTime').valueChanges().subscribe( data => {
      this.cities = data;
      console.log(data);
      for(var x=0; x<data.length; x++){
        this.http.get(this.url + this.cities[x].city).subscribe(data=>{
          this.timeAll.push(data);
        });
      }
      console.log(this.timeAll);
    });

  }

  alert(message : string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  addCity(){
    if(this.cityName.length >= 3) {
      console.log("Is String");

      this.db.list('/citiesTime').push({
        city: this.cityName,
      });
      location.reload();
    }else{
      this.alert("Name have to contain at least 3 characters.");
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TimePage');
  }

}
