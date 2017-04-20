import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Timer } from '../../components/timer'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Timer) timer: Timer;

  constructor(public navCtrl: NavController) {}

  // ngOnInit() {
  //   setTimeout(() => {
  //     this.timer.start();
  //   }, 1000)
  // }
}
