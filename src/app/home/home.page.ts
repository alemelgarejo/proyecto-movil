import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

  splash = true;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    console.log(this.splash);
    setTimeout(() => {
      this.splash = false;
      console.log(this.splash);
      return this.splash;
    }, 4000);}

  ionViewDidLoad() {

  }

}
