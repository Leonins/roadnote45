import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
export const firebaseConfig={
  apiKey: "AIzaSyBiNoGGTtO9EN7_HMNmBCITnZEoHkZiq0E",
    authDomain: "db-93864.firebaseapp.com",
    databaseURL: "https://db-93864.firebaseio.com",
    projectId: "db-93864",
    storageBucket: "db-93864.appspot.com",
    messagingSenderId: "358760374079"
}

firebase.initializeApp(firebaseConfig)

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy} from '@ionic-native/location-accuracy';
import { Camera } from '@ionic-native/camera';

import { AngularFireModule} from 'angularfire2';
import { FIREBASE_CONFIG} from './firebase.credentials';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { FinesAndPenaltiesService } from '../services/fines-and-penalties/fines-and-penalties.service';
import {GooglePlus} from '@ionic-native/google-plus';
import firebase from 'firebase';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), 
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    LocationAccuracy,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus,
    FinesAndPenaltiesService,
  ]
})
export class AppModule {}
