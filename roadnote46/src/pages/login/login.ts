import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {GooglePlus} from '@ionic-native/google-plus';
import {AngularFireModule} from 'angularfire2';
import firebase from 'firebase';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  nav: any;
  userProfile: any = null;
  constructor(public navCtrl: NavController, public googleplus:GooglePlus, public navParams: NavParams,
    private menu: MenuController) {

      firebase.auth().onAuthStateChanged( user => {
        if (user){
          this.userProfile = user;
        } else { 
            this.userProfile = null;
        }
      });
    menu.enable(false);
  }
  login(): void {
    this.googleplus.login({
      'webClientId': '358760374079-keln257gqotdqan1690lt7lkl9ins6fi.apps.googleusercontent.com',
      'offline': true
    }).then( res => {
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
        .then( success => {
          console.log("Firebase success: " + JSON.stringify(success));
          console.log("Log in Success")
        })
        .catch( error => console.log("Firebase failure: " + JSON.stringify(error)));
      }).catch(err => console.error("Error: ", err));
  
    }

    // this.googleplus.login({
    //   'webClientId':'358760374079-keln257gqotdqan1690lt7lkl9ins6fi.apps.googleusercontent.com',
    //   'offline':true
    // }).then(res=>{
    //   firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken)).then(success=>{
    //     alert("LOGIN SUCCESS")
    //     this.navigateToHome();
    //   }).catch(ns=>{
    //     alert("NOT SUCCESS")
    //   })

    // })
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  navigateToHome(){
  	this.navCtrl.setRoot("HomePage");
  }

  openLoginPage(){
    this.googleplus.logout();
    this.nav.setRoot("LoginPage");
  }
}
