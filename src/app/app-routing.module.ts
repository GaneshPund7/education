import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FEAllNComponent } from './feall-n/feall-n.component';
import { JavaIQComponent } from './java-iq/java-iq.component';
import { JobComponent } from './job/job.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from 'ng-cdbangular';
import { ApplynowComponent } from './applynow/applynow.component';
import { ChemComponent } from './chem/chem.component';
import { ElectricalComponent } from './electrical/electrical.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { MechanicalComponent } from './mechanical/mechanical.component';
import { DashboardComponent } from './dashboard/dashboard.component';

 
const routes: Routes = [
  { path : '', redirectTo : 'dashboard',pathMatch: 'full' }, 
  { component: AboutComponent, path: 'about'},
  { component: JobsComponent, path: 'jobsadd'},
  { component: FEAllNComponent, path: 'FEAllNotes'},
  { component: JavaIQComponent, path: 'JavaIQ'},
  { component: LoginComponent, path:'login'},
  { component: SidebarComponent, path:'feall'},
  { component: ApplynowComponent, path:'physics'},
  { component: ChemComponent, path: 'chemistry'},
  { component: ElectricalComponent, path: 'FeElectrical'},
  { component: ElectronicsComponent, path: 'electronics'},
  { component: MechanicalComponent, path: 'mechanical'},
  { component: JobComponent, path: 'jobs'},
 
  
  
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'FEAllNotes', component: FEAllNComponent },
  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
