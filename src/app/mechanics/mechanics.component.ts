import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mechanics',
  templateUrl: './mechanics.component.html',
  styleUrls: ['./mechanics.component.css']
})
export class MechanicsComponent implements OnInit {
  @Output() backToMain : EventEmitter<any> = new EventEmitter()
ngOnInit(): void {
    

}
toggleViewMechanics(){
  this.backToMain.emit();
}
}
