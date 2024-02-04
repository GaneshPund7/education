import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  myArray =[10,10]

  ngOnInit(): void {
      
  }

  aboutimg ="./assets/About_us.jpeg"
  serviceimg = "./assets/serviceimgg.jpeg"
 
 
}
 