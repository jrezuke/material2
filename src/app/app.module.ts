import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppDialog } from "./app-dialog";
import { TabComponent } from './tab/tab.component';
import { DialogComponent } from './dialog/dialog.component';
import { HomeComponent } from './home/home.component';
import { NavSlideComponent } from './nav-slide/nav-slide.component';

@NgModule({
  declarations: [
    AppComponent, AppDialog, TabComponent, DialogComponent, HomeComponent, NavSlideComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  entryComponents: [AppDialog],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
