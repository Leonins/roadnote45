import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, MenuController } from 'ionic-angular';

//import { AngularFireDatabase} from 'angularfire2/database';
import { FinesAndPenaltiesService } from '../../services/fines-and-penalties/fines-and-penalties.service';
import { Observable } from 'rxjs/Observable';
import { violation_fines } from '../../models/finesAndPenalties/filesAndPenalties.model';
/**
 * Generated class for the FinesAndPenaltiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fines-and-penalties',
  templateUrl: 'fines-and-penalties.html',
})
export class FinesAndPenaltiesPage {

  finesPenalties$ : Observable<violation_fines[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, app: App, menu: MenuController, 
    private fineAndPenalties: FinesAndPenaltiesService) {

  	menu.enable(true);
  	menu.swipeEnable(true);
    
    this.finesPenalties$ = this.fineAndPenalties
    .getFinesAndPenalties() // DB List
    .snapshotChanges() // Key and Value
    .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }));
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinesAndPenaltiesPage');
  }

}
