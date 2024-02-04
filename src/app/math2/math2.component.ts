import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-math2',
  templateUrl: './math2.component.html',
  styleUrls: ['./math2.component.css']
})
export class Math2Component implements OnInit {
  @Output() backToMain : EventEmitter<any> = new EventEmitter();

 ngOnInit(): void {
     
 }
 toggleViewM2(){
  this.backToMain.emit();
 }
}
