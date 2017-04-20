import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Timer } from '../../components/timer'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Timer) timer: Timer;
  startTime: number;

  constructor(public navCtrl: NavController) {
    this.startTime = 20;
  }

  get timeModel() {
    return this.startTime;
  }

  set timeModel(value) {
    this.startTime = value;
    this.timer.setTime(this.startTime);
  }

}
