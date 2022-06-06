import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { HomerComponent } from './components/pages/homer/homer.component';
import { MomentComponent } from './components/pages/moment/moment.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';


const routes: Routes = [
  {path:'', component: HomerComponent},
  {path:'about', component: AboutComponent}, 
  {path: 'moments/new', component: NewMomentComponent},
  {path: 'moments/:id', component: MomentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
