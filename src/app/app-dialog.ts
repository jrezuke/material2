import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './app-dialog.html',
})
export class AppDialog {
  constructor(public dialogRef: MdDialogRef<AppDialog>) {}
}