import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { MyDialogueComponent } from "../my-dialogue/my-dialogue.component"
import { MatDialog } from '@angular/material';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  @ViewChild('success') success: SwalComponent;
  @ViewChild('error') error: SwalComponent;
  constructor(private _user: UserService, public dialog: MatDialog) { }

  ngOnInit() {

  }
  email = new FormControl('', [Validators.required]);
  subscribe() {
    this._user.subscribe(this.email.value)
      .then((resp) => {
        // const dialogRef = this.dialog.open(MyDialogueComponent, {
        //   height: '200px',
        //   width: '200px',
        //   data: {message:"Thanks For Your Response. We Will Update The New Plan For You!"}
        // });

        // dialogRef.afterClosed().subscribe(result => {
        //   window.location.href = "./";
        // });
        this.success.show()
          .then(() => { this.email.setValue('')});
      }, (err) => {
        // alert("Somethign going wrong please contact the adminitrator");
        //   window.location.href = "./";
        this.error.show();

      });
  }
}
