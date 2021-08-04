import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  i: number = 1;
  imgSrc: string = `assets/Images/${this.i}.jpg`
  timer: any;
  //"assets/Images/1.jpg";
  play() {
    this.timer = setInterval(() => {
      if (this.i > 6) {
        this.i = 1;
      }
      this.imgSrc = `assets/Images/${this.i}.jpg`;
      this.i++
    }, 1000);
  }
  //////////////////////////////////////////////////////////////////////////////////////////
  secondImg(){
    if(this.i<=6){
      this.i++;
      this.imgSrc = `assets/Images/${this.i}.jpg`;
  }
   }
  //////////////////////////////////////////////////////////////////////////////////////
  previousImg() {
    if(this.i>=1){
      this.i--;
      this.imgSrc = `assets/Images/${this.i}.jpg`;
  }
   }
  ////////////////////////////////////////////////////////////////////////////////
  stop(){
    clearInterval(this.timer);
  }
}
