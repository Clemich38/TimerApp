import { Component, Input, OnInit } from '@angular/core';

declare var Chart: any;


@Component({
  selector: 'timer',
  templateUrl: 'timer.html'
})

export class Timer implements OnInit {

  @Input() time: number;
  public timer: ITimer;

  public constructor() {}

  public ngOnInit() {
    this.init();
  }

  init(){
    if (!this.time)
      this.time = 0;

    this.timer = <ITimer>{
      time: this.time,
      startTimer: false,
      isStarted: false,
      isOver: false,
      remainingTime: this.time
    };

    this.timer.timeStr = this.convertTimeToStr(this.timer.remainingTime);
  }

  isOver() {
    return this.timer.isOver;
  }

  start() {
    this.timer.isStarted = true;
    this.timer.startTimer = true;
    this.timerTick();
  }

  pause() {
    this.timer.startTimer = false;
  }

  resume() {
    this.start();
  }

  timerTick() {
    setTimeout(() => {
      if (!this.timer.startTimer)
        return;

      this.timer.remainingTime --;
      this.timer.timeStr = this.convertTimeToStr(this.timer.remainingTime);
      if (this.timer.remainingTime > 0) {
        this.timerTick();
      }
      else {
        this.timer.isOver = true;
      }
    }, 1000);
  }

  convertTimeToStr(time: number) {
    var secNb = parseInt(time.toString(), 10);
    var hoursNb = Math.floor(secNb / 3600);
    var minutesNb = Math.floor((secNb - (hoursNb * 3600)) / 60);
    var secondsNb = secNb - (hoursNb * 3600) - (minutesNb * 60);
    var hoursStr = '';
    var minutesStr = '';
    var secondsStr = '';
    hoursStr = (hoursNb < 10) ? "0" + hoursNb : hoursNb.toString();
    minutesStr = (minutesNb < 10) ? "0" + minutesNb : minutesNb.toString();
    secondsStr = (secondsNb < 10) ? "0" + secondsNb : secondsNb.toString();
    return hoursStr + ':' + minutesStr + ':' + secondsStr;
  }


}

export interface ITimer {
  time: number;
  remainingTime: number;
  startTimer: boolean;
  isStarted: boolean;
  isOver: boolean;
  timeStr: string;
}