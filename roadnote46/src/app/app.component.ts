import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, App, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:string= "LoginPage";
  icon:string ="arrow-dropright";


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, app: App, menu: MenuController) {
    this.initializeApp();
    menu.enable(true);    

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

 openHomePage(){
   this.nav.setRoot("HomePage");
 }

 openLoginPage(){
   this.nav.setRoot("LoginPage");
 }

 openFinesAndPenaltiesPage(){
   this.nav.setRoot("FinesAndPenaltiesPage");
 }

 openSendReportPage(){
    this.nav.setRoot("SendReportPage");
  }
}
