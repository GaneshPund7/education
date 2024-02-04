import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-electrical',
  templateUrl: './electrical.component.html',
  styleUrls: ['./electrical.component.css']
})
export class ElectricalComponent implements OnInit {
  @Output() backToMain: EventEmitter<any> = new EventEmitter();


  hideansbtn: boolean = true;
  hideansbtn1: boolean = true;
  hideansbtn2: boolean = true;
  hideansbtn3: boolean = true;
  hideansbtn4: boolean = true;
  hideansbtn5: boolean = true;
  hideansbtn6: boolean = true;
  hideansbtn7: boolean = true;
  ngOnInit(): void {

  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  showAns1() {
    this.hideansbtn = false;
  }
  HideAns1() {
    this.hideansbtn = true;
  }
  showAns2() {
    this.hideansbtn1 = false;
  }
  HideAns2() {
    this.hideansbtn1 = true;
  }
  showAns3() {
    this.hideansbtn2 = false;
  }
  HideAns3() {
    this.hideansbtn2 = true;
  }
  showAns4() {
    this.hideansbtn3 = false;
  }
  HideAns4() {
    this.hideansbtn3 = true;
  }
  showAns5() {
    this.hideansbtn4 = false;
  }
  HideAns5() {
    this.hideansbtn4 = true;
  }
  showAns6() {
    this.hideansbtn5 = false;
  }
  HideAns6() {
    this.hideansbtn5 = true;
  }
  showAns7() {
    this.hideansbtn6 = false;
  }
  HideAns7() {
    this.hideansbtn6 = true;
  }
  showAns8() {
    this.hideansbtn7 = false;
  }
  HideAns8() {
    this.hideansbtn7 = true;
  }
 
  Q2a = "Q2) a) What are biodegradable polymers? Explain three factors responsible for biodegradation. Give two properties and two uses of biodegradable polymer."
  Q2b = "Q2) b) What are nanomaterials? Discuss in brief two properties and applications of nanomaterials."
  Q2c = "Q2) c) Give the structure and three properties and applications each of polycarbonate."
  
  marks1 = "[6]"
  marks2 = "[5]"
  marks3 = "[4]"
  marks4 = "[3]"
  marks5 = "[8]"
  toggleViewElectrical(){
    this.backToMain.emit();
  }

}