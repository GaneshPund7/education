import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mechanical',
  templateUrl: './mechanical.component.html',
  styleUrls: ['./mechanical.component.css']
})
export class MechanicalComponent implements OnInit {
  @Output() backToMain : EventEmitter<any> = new EventEmitter();
ngOnInit(): void {
    
}
toggleViewMechanical(){
  this.backToMain.emit();
}
}
