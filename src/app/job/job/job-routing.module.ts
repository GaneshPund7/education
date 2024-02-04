import { NgModule ,OnInit} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplynowComponent } from 'src/app/applynow/applynow.component';

const routes: Routes = [
  { component: ApplynowComponent, path: 'applynow'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule {
  
 }
 