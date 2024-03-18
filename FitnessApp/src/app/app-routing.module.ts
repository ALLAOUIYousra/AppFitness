import { ContentChild, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { FormsComponent } from './forms/forms.component';
import { SalleComponent } from './salle/salle.component';
// import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HealthyFoodComponent } from './healthy-food/healthy-food.component';

const routes: Routes = [

{path:'content',component:ContentComponent},
{path:'footer',component:FooterComponent},
{path:'healthy-food',component:HealthyFoodComponent},
{path:'forms',component:FormsComponent},
{path:'salle',component:SalleComponent},
// {path:'signup',component:SignupComponent},
{path:'login', component:LoginComponent},
{ path: '**', component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
