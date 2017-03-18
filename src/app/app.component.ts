import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {  
  constructor(private _router: Router) {

  }

  ngOnInit(): void {
    //listen to all router events
    this._router.events.subscribe(e => {
      console.log("app.component.ngOnitit - router events:", e);
    });

    //listen to the NavigationEnd event only
    this._router.events.filter(e => e instanceof NavigationEnd).subscribe(e => {
      console.log("app.component.ngOnitit - router navigation end event:", e.url);
    });
  }

  

}
