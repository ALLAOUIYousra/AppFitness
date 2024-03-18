import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
// import { FormsComponent } from './forms/forms.component';
import { SignupComponent } from './signup/signup.component';
import { ContentComponent } from './content/content.component';
import { SalleComponent } from './salle/salle.component';
import { RouterModule } from '@angular/router';
import { HealthyFoodComponent } from './healthy-food/healthy-food.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    // FormsComponent,
    SignupComponent,
    ContentComponent,
    SalleComponent,
    HealthyFoodComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
