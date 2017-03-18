import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabComponent } from './tab/tab.component';
import { HomeComponent } from "./home/home.component";
import { DialogComponent } from "./dialog/dialog.component";
const routes: Routes = [
  {
    path: '',
    children:[

    ]    
  },
  {
    path: 'tabs', component: TabComponent
  },
  {
    path: 'dialog', component: DialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
