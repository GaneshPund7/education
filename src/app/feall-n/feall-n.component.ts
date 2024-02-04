import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({

  selector: 'app-feall-n',
  templateUrl: './feall-n.component.html',
  styleUrls: ['./feall-n.component.css']
})
export class FEAllNComponent implements OnInit{

  formValue !: FormGroup;
  @Output() backToMain : EventEmitter<any> = new EventEmitter();

  constructor(private formbuilder: FormBuilder){}
  isShowChem = false;
  isShowPhy = false;
  isShowElectrical = false;
  isShowElectronics = false;
  isShowMechanics = false;
  isShowMechanical = false;
  isShowM1 = false;
  isShowM2 = false;
  hideandshow : boolean = true;
  
   ngOnInit(): void {
      this.formValue = this.formbuilder.group({
        fistName : [' '],
        lastName : [' '],
        Email : [' '],
        Phone : [' '],
        
      })
  }
 
 
  toggleView() {
    this.isShowChem = !this.isShowChem;
    this.hideandshow = !this.hideandshow;
  }
  toggleViewPhy(){
    this.isShowPhy = !this.isShowPhy;
    this.hideandshow = !this.hideandshow;
  }
  toggleViewElectrical(){
    this.isShowElectrical = !this.isShowElectrical;
    this.hideandshow = !this.hideandshow;
  }
  toggleViewElectronics(){
    this.isShowElectronics = !this.isShowElectronics;
    this.hideandshow = !this.hideandshow;
  }
 
 
 
 
}
