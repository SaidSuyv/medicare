import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MakeDateComponent } from './pages/make-date/make-date.component';
import { MoreComponent } from './pages/more/more.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'more-info',component:MoreComponent},
  {path:'make-date',component:MakeDateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
