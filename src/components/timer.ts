import { Component, Input, OnInit } from '@angular/core';

declare var Chart: any;


@Component({
  selector: 'timer',
  templateUrl: 'timer.html'
})

export class Timer implements OnInit {

  @Input() startTime: number;
  
  time: number;
  startTimer: boolean;
  isStarted: boolean;
  isOver: boolean;
  remainingTime: number;
  timeStr: string;

  public constructor() {}

  public ngOnInit() {
    this.init();
  }

  init(){
    if (!this.startTime)
      this.startTime = 0;

    this.time = this.startTime;
    this.startTimer = false;
    this.isStarted = false;
    this.isOver = false;
    this.remainingTime = this.startTime;
    this.timeStr = this.convertTimeToStr(this.remainingTime);
  }

  getIsOver() {
    return this.isOver;
  }

  start() {
    this.isStarted = true;
    this.startTimer = true;
    this.timerTick();
  }

  pause() {
    this.startTimer = false;
  }

  resume() {
    this.start();
  }

  timerTick() {
    setTimeout(() => {
      if (!this.startTimer)
        return;

      this.remainingTime --;
      this.timeStr = this.convertTimeToStr(this.remainingTime);
      if (this.remainingTime > 0) {
        this.timerTick();
      }
      else {
        this.isOver = true;
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