export class HungryBear {

  constructor() {
    this.foodLevel = 10;
    this.moodLevel = 10;
    this.sleepLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }
  setMood() {
    setInterval(() => {
      this.moodLevel--;
    }, 1000);
  }
  setSleep() {
    setInterval(() => {
      this.sleepLevel--;
    }, 1000);
  }

  didYouGetEaten() {
    if (this.foodLevel <= 0) {
      return true;
    } else if (this.moodLevel <= 0) {
      return true;
    } else if (this.sleepLevel <= 0) {
      return true;
    } else {
      return false;
    }
  }

  feed() {
    this.foodLevel = 10;
  }
  play() {
    this.moodLevel = 10;
  }
  sleep() {
    this.sleepLevel = 10;
  }

  toggleDiv(action){
    let x = document.getElementById(action).style;
      if(x.display == 'none' || x.display == ''){
        x.display = 'block';
      }else{
        x.display = 'none';
      }

    }

  }
