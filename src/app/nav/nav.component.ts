import { Component,OnInit,ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ActivatedRouteSnapshot, NavigationEnd} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private _user:UserService,private breakpointObserver: BreakpointObserver,public dialog: MatDialog) {}
	  openDialog(): void {
	    const dialogRef = this.dialog.open(NavComponent, {
	      width: '250px',
	    });

	    dialogRef.afterClosed().subscribe(result => {
	      console.log('The dialog was closed');
	    });
    }
  ngOnInit(){
     // this._user.mysubject.subscribe((data)=>{this.isShowNav = false});
  }
}
