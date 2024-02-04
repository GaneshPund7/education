import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { JobComponent } from './job/job.component';
import { JavaIQComponent } from './java-iq/java-iq.component';
import { FEAllNComponent } from './feall-n/feall-n.component';
import { LoginComponent } from './login/login.component';
import {  SidebarModule } from 'ng-cdbangular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChemComponent } from './chem/chem.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElectricalComponent } from './electrical/electrical.component';
import { PhysicsComponent } from './physics/physics.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { MechanicalComponent } from './mechanical/mechanical.component';
import { JobsComponent } from './jobs/jobs.component';
 
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    JobComponent,
    JobsComponent,
    JavaIQComponent,
    FEAllNComponent,
    LoginComponent,
    // ApplynowComponent,
     
     LoginComponent,
    ChemComponent,
    DashboardComponent,
    ElectricalComponent,
    PhysicsComponent,
    ElectronicsComponent,
    MechanicalComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
