import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {AngularFireDatabase} from "angularfire2/database";


/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
  url = "http://api.apixu.com/v1/current.json?key=d05eb52e69c14c51a06162137182002&q=";
  defaultCity:string ="Lodz";
  weatherDefault:any;
  cityName:string; // connected with input field in html
  citiesSubsription:any;
  cities:any[];
  weatherAll:any[] = [];



  constructor( private alertCtrl : AlertController, public db: AngularFireDatabase , public navCtrl: NavController, public navParams: NavParams , private http: HttpClient) {
    this.http.get(this.url + "Lodz").subscribe(data=>{
      this.weatherDefault = data;
      console.log(this.weatherDefault);
    });


    this.citiesSubsription = this.db.list('/citiesWeather').valueChanges().subscribe( data => {
      this.cities = data;
      console.log(data);
      for(var x=0; x<data.length; x++){
        this.http.get(this.url + this.cities[x].city).subscribe(data=>{
          this.weatherAll.push(data);
        });
      }
      console.log(this.weatherAll);
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

      this.db.list('/citiesWeather').push({
        city: this.cityName,
      });
      location.reload();
    }else{
      this.alert("Name have to contain at least 3 characters.");
    }
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
  }

}
