import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { MyDialogueComponent } from "../my-dialogue/my-dialogue.component"
import { MatDialog } from '@angular/material';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  @ViewChild('success') success: SwalComponent;
  @ViewChild('delete') delete: SwalComponent;
  constructor(private _userService: UserService, public dialog: MatDialog) { }
  getQoute: FormGroup;
  cols = 2;
  ngOnInit() {
    this.getQoute = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
    // console.log(window.innerWidth);
    if (window.innerWidth < 768) {
      this.cols = 1;
    }
  }
  onSubmit(form) {
    form.value.isqoute = false;
    this._userService.postQuote(form.value)
      .then((resp) => {
        // const dialogRef = this.dialog.open(MyDialogueComponent, {
        //   height: '200px',
        //   width: '200px',
        //   data: {message:"Thanks For Your Response. Our Team Will contact you Soon!"}
        // });

        // dialogRef.afterClosed().subscribe(result => {
        //   window.location.href = "./";
        // });
        this.success.show()
          .then(() => { form.reset() })
      }, (err) => {
        // alert("Somethign going wrong please contact the adminitrator");
        this.delete.show()
          .then(() => { form.reset() })
      });
  }
}
