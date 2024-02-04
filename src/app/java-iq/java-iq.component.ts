import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-java-iq',
  templateUrl: './java-iq.component.html',
  styleUrls: ['./java-iq.component.css']
})
export class JavaIQComponent implements OnInit{

  data = 90;
  formValue!: FormGroup;
  upshow!: boolean;
  addshow! : boolean;
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
  constructor() {

  }
  ngOnInit(): void {

       
  }
  logindatas =[
{
  userName : 'Ganesh',
  Email : 'ganesh@gmail.com',
  Password : 'ganejsks ',
}
  ]
  updatedb(){

    this.upshow= true;
    this.addshow= false;
  }
  addmore(){
    this.upshow = false;
    this.addshow = true;
  }
}
