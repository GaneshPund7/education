import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SidebarModule } from 'ng-cdbangular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
      
  }
  title = 'Educoder';
  imgurl = './assets/homeimg.jpeg'; 
  subject = [
    
  ]
}
 